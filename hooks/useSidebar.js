import { useSelector, useDispatch } from "react-redux";
import { handleSidebarCollapsed } from "@/store/layoutReducer";

const useSidebar = () => {
  const dispatch = useDispatch();
  const collapsed = useSelector((state) => true);

  // ** Toggles Menu Collapsed
  const setMenuCollapsed = (val) => dispatch(handleSidebarCollapsed(val));

  return [collapsed, setMenuCollapsed];
};

export default useSidebar;
