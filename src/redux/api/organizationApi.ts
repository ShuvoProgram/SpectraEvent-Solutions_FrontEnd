import { IFAQ, IMeta, IORGANIZATION } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const ORGANIZATION_URL = "/organization";

export const organizationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createOrganization: build.mutation({
      query: (data) => ({
        url: `${ORGANIZATION_URL}`,
        method: "POST",
        data
      }),
      invalidatesTags: [tagTypes.organization],
    }),
    getAllOrganization: build.query({
        query: (arg: Record<string, any>) => {
            return {
                url: ORGANIZATION_URL,
                method: "GET",
                params: arg,
            }
        },
        transformResponse: (response: IORGANIZATION[], meta: IMeta) => {
            return {
              organization: response,
              meta,
            };
          },
          providesTags: [tagTypes.organization],
    }),
   getSingleOrganization: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${ORGANIZATION_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.organization],
    }),
    updateOrganization: build.mutation({
        query: (data) => ({
            url: `${ORGANIZATION_URL}/${data.id}`,
            method: "PATCH",
            data
        }),
        invalidatesTags: [tagTypes.organization]
    }),
    deleteOrganization: build.mutation({
        query: (id) => ({
            url: `${ORGANIZATION_URL}/${id}`,
            method: "DELETE",
        }),
        invalidatesTags: [tagTypes.organization]
    })
  })
});

export const { 
  useCreateOrganizationMutation,
  useDeleteOrganizationMutation,
  useGetAllOrganizationQuery,
  useGetSingleOrganizationQuery,
  useUpdateOrganizationMutation
    } = organizationApi;