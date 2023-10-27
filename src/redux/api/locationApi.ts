import { ILocation, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const LOCATION_URL = "/location";

export const locationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createLocation: build.mutation({
      query: (data) => ({
        url: `${LOCATION_URL}`,
        method: "POST",
        data
      }),
      invalidatesTags: [tagTypes.location],
    }),
    getAllLocation: build.query({
        query: (arg: Record<string, any>) => {
            return {
                url: LOCATION_URL,
                method: "GET",
                params: arg,
            }
        },
        transformResponse: (response: ILocation[], meta: IMeta) => {
            return {
              location: response,
              meta,
            };
          },
          providesTags: [tagTypes.location],
    }),
   getSingleLocation: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${LOCATION_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.location],
    }),
    updateLocation: build.mutation({
        query: (data) => ({
            url: `${LOCATION_URL}/${data.id}`,
            method: "PATCH",
            data
        }),
        invalidatesTags: [tagTypes.location]
    }),
    deleteLocation: build.mutation({
        query: (id) => ({
            url: `${LOCATION_URL}/${id}`,
            method: "DELETE",
        }),
        invalidatesTags: [tagTypes.location]
    })
  })
});

export const {
  useCreateLocationMutation,
  useGetAllLocationQuery,
  useGetSingleLocationQuery,
  useUpdateLocationMutation,
  useDeleteLocationMutation
    } = locationApi;