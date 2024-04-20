import { HttpResponse, delay } from 'msw';

interface AllHandlerProps {
  data: any;
  exception?: boolean;
  delay?: number;
  statusCode?: number;
}

let errorAlreadyShown: any;

export const baseHandler = async (props: AllHandlerProps) => {
  const { data, exception, delay: delayTime = 1000, statusCode } = props;

  await delay(delayTime);

  if (exception && !errorAlreadyShown) {
    errorAlreadyShown = data;

    return new HttpResponse(null, { status: 500, statusText: 'Internal Server Error' });
  }

  if (errorAlreadyShown === data) errorAlreadyShown = undefined;
  if (statusCode) {
    if (data) return HttpResponse.json(data, { status: statusCode });

    return new HttpResponse(data, { status: statusCode });
  }

  return HttpResponse.json(data);
};
