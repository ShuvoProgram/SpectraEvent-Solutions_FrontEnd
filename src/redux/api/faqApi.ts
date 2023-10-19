import { IFAQ, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const FAQ_URL = "/faq";

export const faqApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFaq: build.mutation({
      query: (data) => ({
        url: `${FAQ_URL}`,
        method: "POST",
        data
      }),
      invalidatesTags: [tagTypes.faq],
    }),
    getAllFaq: build.query({
        query: (arg: Record<string, any>) => {
            return {
                url: FAQ_URL,
                method: "GET",
                params: arg,
            }
        },
        transformResponse: (response: IFAQ[], meta: IMeta) => {
            return {
              faq: response,
              meta,
            };
          },
          providesTags: [tagTypes.faq],
    }),
   getSingleFaq: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${FAQ_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.faq],
    }),
    updateFaq: build.mutation({
        query: (data) => ({
            url: `${FAQ_URL}/${data.id}`,
            method: "PATCH",
            data
        }),
        invalidatesTags: [tagTypes.faq]
    }),
    deleteFaq: build.mutation({
        query: (id) => ({
            url: `${FAQ_URL}/${id}`,
            method: "DELETE",
        }),
        invalidatesTags: [tagTypes.faq]
    })
  })
});

export const { 
   useCreateFaqMutation,
   useGetAllFaqQuery,
   useGetSingleFaqQuery,
   useUpdateFaqMutation,
   useDeleteFaqMutation,
    } = faqApi;