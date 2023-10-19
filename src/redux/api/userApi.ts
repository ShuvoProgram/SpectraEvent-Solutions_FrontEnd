import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const USER_URL = "/user";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query({
      query: () => ({
        url: `${USER_URL}/profile`,
        method: "GET"
      }),
      providesTags: [tagTypes.user]
    }),
    profileUpdate: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/profile`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.user]
    })
  })
});

export const { 
    useGetProfileQuery,
    useProfileUpdateMutation,
    } = userApi;