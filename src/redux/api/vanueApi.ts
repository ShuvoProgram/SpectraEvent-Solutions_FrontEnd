import { IVanue, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const Vanue_URL = "/vanue";

export const vanueApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createVanue: build.mutation({
      query: (data) => ({
        url: `${Vanue_URL}`,
        method: "POST",
        data
      }),
      invalidatesTags: [tagTypes.vanue],
    }),
    getAllVanue: build.query({
        query: (arg: Record<string, any>) => {
            return {
                url: Vanue_URL,
                method: "GET",
                params: arg,
            }
        },
        transformResponse: (response: IVanue[], meta: IMeta) => {
            return {
              vanue: response,
              meta,
            };
          },
          providesTags: [tagTypes.vanue],
    }),
   getSingleVanue: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${Vanue_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.vanue],
    }),
    updateVanue: build.mutation({
        query: (data) => ({
            url: `${Vanue_URL}/${data.id}`,
            method: "PATCH",
            data
        }),
        invalidatesTags: [tagTypes.vanue]
    }),
    deleteVanue: build.mutation({
        query: (id) => ({
            url: `${Vanue_URL}/${id}`,
            method: "DELETE",
        }),
        invalidatesTags: [tagTypes.vanue]
    })
  })
});

export const {
  useCreateVanueMutation,
  useGetAllVanueQuery,
  useGetSingleVanueQuery,
  useUpdateVanueMutation,
  useDeleteVanueMutation
    } = vanueApi;