import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const initialState = {
  customTitle: '',
};

export const breadcrumbSlice = createSlice({
  name: "breadcrumb",
  initialState,
  reducers: {
    setBreadcrumbTitle: (state, action) => {
      state.customTitle = action.payload;
    },
  },
});

export const { setBreadcrumbTitle } = breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;

export function useCustomBreadcrumb(title, dependencies = []) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (title) {
      dispatch(setBreadcrumbTitle(title));
    }
    
    return () => {
      dispatch(setBreadcrumbTitle(''));
    };
  }, dependencies);
}
