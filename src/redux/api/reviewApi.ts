import { IMeta, IReview } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const REVIEW_URL = "/review";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createReview: build.mutation({
      query: (data) => ({
        url: `${REVIEW_URL}`,
        method: "POST",
        data
      }),
      invalidatesTags: [tagTypes.review],
    }),
    getAllReview: build.query({
        query: (arg: Record<string, any>) => {
            return {
                url: REVIEW_URL,
                method: "GET",
                params: arg,
            }
        },
        transformResponse: (response: IReview[], meta: IMeta) => {
            return {
              review: response,
              meta,
            };
          },
          providesTags: [tagTypes.review],
    }),
   getSingleReview: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${REVIEW_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.review],
    }),
    updateReview: build.mutation({
        query: (data) => ({
            url: `${REVIEW_URL}/${data.id}`,
            method: "PATCH",
            data
        }),
        invalidatesTags: [tagTypes.review]
    }),
    deleteReview: build.mutation({
        query: (id) => ({
            url: `${REVIEW_URL}/${id}`,
            method: "DELETE",
        }),
        invalidatesTags: [tagTypes.review]
    })
  })
});

export const { 
 useCreateReviewMutation,
 useGetAllReviewQuery,
  useGetSingleReviewQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
    } = reviewApi;