const httpClient = {
  get: <T>(url: string) =>
    fetch(url).then((response) => response.json()) as Promise<T>,
};

export default httpClient;
