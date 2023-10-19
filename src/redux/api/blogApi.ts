import { IBlog, IFavorite, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const BLOG_URL = "/blog";

export const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBlog: build.mutation({
      query: (data) => ({
        url: `${BLOG_URL}`,
        method: "POST",
        data
      }),
      invalidatesTags: [tagTypes.blog],
    }),
    getAllBlog: build.query({
        query: (arg: Record<string, any>) => {
            return {
                url: BLOG_URL,
                method: "GET",
                params: arg,
            }
        },
        transformResponse: (response: IBlog[], meta: IMeta) => {
            return {
              blog: response,
              meta,
            };
          },
          providesTags: [tagTypes.blog],
    }),
   getSingleBlog: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${BLOG_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),
    updateBlog: build.mutation({
        query: (data) => ({
            url: `${BLOG_URL}/${data.id}`,
            method: "PATCH",
            data
        }),
        invalidatesTags: [tagTypes.blog]
    }),
    deleteBlog: build.mutation({
        query: (id) => ({
            url: `${BLOG_URL}/${id}`,
            method: "DELETE",
        }),
        invalidatesTags: [tagTypes.blog]
    })
  })
});

export const { 
  useCreateBlogMutation,
  useGetAllBlogQuery,
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
    } = blogApi;