import { IAdmin, IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const ADMIN_URL = "/admin";
const USER_URL = "/user";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addAdminWithFormData: build.mutation({
      query: (data) => ({
        url: `${ADMIN_URL}/create-admin`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.admin, tagTypes.super_admin],
    }),
    getAllAdmin: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: ADMIN_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IAdmin[], meta: IMeta) => {
        return {
          admins: response,
          meta,
        };
      },
      providesTags: [tagTypes.admin, tagTypes.super_admin],
    }),
    admin: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${ADMIN_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.admin, tagTypes.super_admin],
    }),
    updateAdmin: build.mutation({
      query: (data) => ({
        url: `${ADMIN_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.admin, tagTypes.super_admin],
    }),
    deleteAdmin: build.mutation({
      query: (id) => ({
        url: `${ADMIN_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.admin],
    }),
    getSingleUser: build.query({
        query: (id: string | string[] | undefined) => ({
            url: `${USER_URL}/${id}`,
            method: "GET",
        }),
        providesTags: [tagTypes.user, tagTypes.admin, tagTypes.super_admin],
    }),
    getAdminProfile: build.query({
        query: () => ({
          url: `${ADMIN_URL}/admin-profile`,
          method: "GET",
        }),
        providesTags: [tagTypes.user, tagTypes.admin, tagTypes.super_admin],
      }),
      AdminProfileUpdate: build.mutation({
        query: (data) => ({
          url: `${ADMIN_URL}/admin-profile`,
          method: "PATCH",
          data: data,
        }),
        invalidatesTags: [tagTypes.user, tagTypes.admin, tagTypes.super_admin],
      })
  }),
});

export const {
    useGetAdminProfileQuery,
    useAdminProfileUpdateMutation,
    useGetSingleUserQuery,
 useGetAllAdminQuery,
  useAdminQuery,
  useAddAdminWithFormDataMutation,
  useUpdateAdminMutation,
  useDeleteAdminMutation,
} = adminApi;
