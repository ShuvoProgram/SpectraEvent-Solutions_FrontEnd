import { IEvent, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const EVENT_URL = "/event";

export const eventApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createEvent: build.mutation({
      query: (data) => ({
        url: `${EVENT_URL}`,
        method: "POST",
        data
      }),
      invalidatesTags: [tagTypes.event],
    }),
    getAllEvent: build.query({
        query: (arg: Record<string, any>) => {
            return {
                url: EVENT_URL,
                method: "GET",
                params: arg,
            }
        },
        transformResponse: (response: IEvent[], meta: IMeta) => {
            return {
              event: response,
              meta,
            };
          },
          providesTags: [tagTypes.event],
    }),
   getSingleEvent: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${EVENT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.event],
    }),
    updateEvent: build.mutation({
        query: (data) => ({
            url: `${EVENT_URL}/${data.id}`,
            method: "PATCH",
            data
        }),
        invalidatesTags: [tagTypes.event]
    }),
    deleteEvent: build.mutation({
        query: (id) => ({
            url: `${EVENT_URL}/${id}`,
            method: "DELETE",
        }),
        invalidatesTags: [tagTypes.event]
    })
  })
});

export const { 
    useCreateEventMutation,
    useGetAllEventQuery,
    useGetSingleEventQuery,
    useUpdateEventMutation,
    useDeleteEventMutation,
    } = eventApi;