import { IFAQ, IFavorite, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const FAVORITE_URL = "/favorite";

export const favoriteApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFavorite: build.mutation({
      query: (data) => ({
        url: `${FAVORITE_URL}`,
        method: "POST",
        data
      }),
      invalidatesTags: [tagTypes.favorite],
    }),
    getAllFavorite: build.query({
        query: (arg: Record<string, any>) => {
            return {
                url: FAVORITE_URL,
                method: "GET",
                params: arg,
            }
        },
        transformResponse: (response: IFavorite[], meta: IMeta) => {
            return {
              faq: response,
              meta,
            };
          },
          providesTags: [tagTypes.favorite],
    }),
   getSingleFavorite: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${FAVORITE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.favorite],
    }),
    updateFavorite: build.mutation({
        query: (data) => ({
            url: `${FAVORITE_URL}/${data.id}`,
            method: "PATCH",
            data
        }),
        invalidatesTags: [tagTypes.favorite]
    }),
    deleteFavorite: build.mutation({
        query: (id) => ({
            url: `${FAVORITE_URL}/${id}`,
            method: "DELETE",
        }),
        invalidatesTags: [tagTypes.favorite]
    })
  })
});

export const { 
  useCreateFavoriteMutation,
  useGetAllFavoriteQuery,
  useGetSingleFavoriteQuery,
  useUpdateFavoriteMutation,
  useDeleteFavoriteMutation,
    } = favoriteApi;