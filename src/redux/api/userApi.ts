import { IMeta, IUser } from "@/types";
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
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user]
    }),
    getAllCustomer: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: USER_URL,
          method: "GET",
          params: arg,
      };
      },
      transformResponse: (response: IUser[], meta: IMeta) => {
        return {
            users: response,
            meta,
        };
    },
    providesTags: [tagTypes.user],
    }),
    getSingleCustomer: build.query({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "GET",
    }),
    providesTags: [tagTypes.user],
    }),
    updateCustomer: build.mutation({
      query: (data) => ({
          url: `${USER_URL}/${data.id}`,
          method: "PATCH",
          data: data.body,
      }),
      invalidatesTags: [tagTypes.user],
  }),
  deleteCustomer: build.mutation({
    query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "DELETE",
    }),
    invalidatesTags: [tagTypes.user],
}),
  })
});

export const { 
    useGetProfileQuery,
    useProfileUpdateMutation,
    useGetAllCustomerQuery,
    useUpdateCustomerMutation,
    useDeleteCustomerMutation,
    useGetSingleCustomerQuery
    } = userApi;