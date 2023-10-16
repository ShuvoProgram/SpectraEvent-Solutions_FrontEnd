import { IMeta } from "@/types";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosError } from 'axios';

export const axiosBaseQuery = (
  { baseUrl }: { baseUrl: string } = { baseUrl: "" }
): BaseQueryFn<
  {
    url: string,
    method: AxiosRequestConfig["method"];
    data?: AxiosRequestConfig["data"];
    params?: AxiosRequestConfig["params"];
    meta?: IMeta;
    contentType?: string;
  },
  unknown,
  unknown
> => async ({ url, method, data, params, contentType }) => {
  try {
    const result = await axi
  } catch (error) {

  }
}