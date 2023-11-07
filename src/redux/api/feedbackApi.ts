import { IFeedback, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const feedback_URL = "/feedback";

export const feedbackApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFeedback: build.mutation({
      query: (data) => ({
        url: `${feedback_URL}`,
        method: "POST",
        data
      }),
      invalidatesTags: [tagTypes.Feedback],
    }),
    getAllFeedback: build.query({
        query: () => {
            return {
                url: feedback_URL,
                method: "GET",
            }
        },
         providesTags: [tagTypes.Feedback],
    }),
   getSingleFeedback: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${feedback_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.Feedback],
    }),
    updateFeedback: build.mutation({
        query: (data) => ({
            url: `${feedback_URL}/${data.id}`,
            method: "PATCH",
            data: data.body
        }),
        invalidatesTags: [tagTypes.Feedback]
    }),
    deleteFeedback: build.mutation({
        query: (id) => ({
            url: `${feedback_URL}/${id}`,
            method: "DELETE",
        }),
        invalidatesTags: [tagTypes.Feedback]
    })
  })
});

export const { 
   useCreateFeedbackMutation,
   useGetAllFeedbackQuery,
   useGetSingleFeedbackQuery,
   useUpdateFeedbackMutation,
   useDeleteFeedbackMutation
    } = feedbackApi;