import { IFAQ, IMeta, ICategory } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const Category_URL = "/category";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCategory: build.mutation({
      query: (data) => ({
        url: `${Category_URL}`,
        method: "POST",
        data
      }),
      invalidatesTags: [tagTypes.category],
    }),
    getAllCategory: build.query({
        query: (arg: Record<string, any>) => {
            return {
                url: Category_URL,
                method: "GET",
                params: arg,
            }
        },
        transformResponse: (response: ICategory[], meta: IMeta) => {
            return {
              Category: response,
              meta,
            };
          },
          providesTags: [tagTypes.category],
    }),
   getSingleCategory: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${Category_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.category],
    }),
    updateCategory: build.mutation({
        query: (data) => ({
            url: `${Category_URL}/${data.id}`,
            method: "PATCH",
            data
        }),
        invalidatesTags: [tagTypes.category]
    }),
    deleteCategory: build.mutation({
        query: (id) => ({
            url: `${Category_URL}/${id}`,
            method: "DELETE",
        }),
        invalidatesTags: [tagTypes.category]
    })
  })
});

export const { 
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoryQuery,
  useGetSingleCategoryQuery,
  useUpdateCategoryMutation
    } = categoryApi;