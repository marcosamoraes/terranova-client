import { v4 as uuidv4 } from "uuid";
const themeConfig = {
  app: {
    name: "Terra Nova",
  },
  // layout
  layout: {
    isRTL: false,
    darkMode: false,
    semiDarkMode: true,
    skin: "default",
    contentWidth: "full",
    type: "vertical",
    navBarType: "sticky",
    footerType: "static",
    isMonochrome: false,
    menu: {
      isCollapsed: false,
      isHidden: false,
    },
    mobileMenu: false,
    customizer: false,
  },
};

export default themeConfig;
