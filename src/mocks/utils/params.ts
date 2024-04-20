export const params = {
  queryParams: (requestUrl: string) => {
    const url = new URL(requestUrl);
    const params = url.search.split(/[?&]/).reduce((acc, value) => {
      const match = value.match(/([^\=]+)\=([^=]+)/);

      if (match) acc[match[1]] = match[2];

      return acc;
    }, {} as Record<string, string>);

    return params;
  }
};
