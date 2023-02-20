import { ResponseData } from "../interfaces/ResponseData";

export const FetchApi = async (): Promise<ResponseData[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data.slice(0, 20);
};
