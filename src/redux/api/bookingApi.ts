import { IBooking, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const BOOKING_URL = "/booking";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addBookingEvent: build.mutation({
      query: (data) => ({
        url: `${BOOKING_URL}/create-booking`,
        method: "POST",
        data
      }),
      invalidatesTags: [tagTypes.booking],
    }),
    getAllBooking: build.query({
        query: (arg: Record<string, any>) => {
            return {
                url: BOOKING_URL,
                method: "GET",
                params: arg,
            }
        },
        transformResponse: (response: IBooking[], meta: IMeta) => {
            return {
              booking: response,
              meta,
            };
          },
          providesTags: [tagTypes.booking],
    }),
   getSingleBooking: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${BOOKING_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.booking],
    }),
    updateBooking: build.mutation({
        query: (data) => ({
            url: `${BOOKING_URL}/${data.id}`,
            method: "PATCH",
            data
        }),
        invalidatesTags: [tagTypes.booking]
    }),
    cancelBooking: build.mutation({
        query: (data) => ({
            url: `${BOOKING_URL}/cancel-booking/${data.id}`,
            method: "PATCH",
        }),
        invalidatesTags: [tagTypes.booking]
    }),
    confirmBooking: build.mutation({
        query: (data) => ({
            url: `${BOOKING_URL}/confirm-booking/${data.id}`,
            method: "PATCH",
        }),
        invalidatesTags: [tagTypes.booking]
    }),
    completeBooking: build.mutation({
        query: (data) => ({
            url: `${BOOKING_URL}/complete-booking/${data.id}`,
            method: "PATCH",
        }),
        invalidatesTags: [tagTypes.booking]
    }),
    deleteBooking: build.mutation({
        query: (id) => ({
            url: `${BOOKING_URL}/${id}`,
            method: "DELETE",
        }),
        invalidatesTags: [tagTypes.booking]
    })
  })
});

export const { 
  useAddBookingEventMutation,
  useGetAllBookingQuery,
  useGetSingleBookingQuery,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
  useCancelBookingMutation,
  useConfirmBookingMutation,
  useCompleteBookingMutation,
    } = bookingApi;