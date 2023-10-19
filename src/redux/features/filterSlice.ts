import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface filter {
  sort: string,
  search: string,
  price: string
}

const initialState: filter = {
  sort: '',
  search: '',
  price: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    searchParam: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    sortType: (state, action: PayloadAction<string>) => {
      state.sort = action.payload
    },
    priceSort: (state, action: PayloadAction<string>) => {
      state.price = action.payload
    }
  }
})

export default filterSlice.reducer;
export const { searchParam, sortType, priceSort } = filterSlice.actions