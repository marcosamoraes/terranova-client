import React, { useRef, useEffect, useState } from "react";

import Navmenu from "./Navmenu";
import { menuItems } from "@/constant/data";
import SimpleBar from "simplebar-react";
import useSemiDark from "@/hooks/useSemiDark";
import useSkin from "@/hooks/useSkin";
import useDarkMode from "@/hooks/useDarkMode";
import Link from "next/link";
import useMobileMenu from "@/hooks/useMobileMenu";
import Icon from "@/components/ui/Icon";

const MobileMenu = ({ className = "custom-class" }) => {
  const scrollableNodeRef = useRef();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (scrollableNodeRef.current.scrollTop > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    scrollableNodeRef.current.addEventListener("scroll", handleScroll);
  }, [scrollableNodeRef]);

  const [isSemiDark] = useSemiDark();
  // skin
  const [skin] = useSkin();
  const [isDark] = useDarkMode();
  const [mobileMenu, setMobileMenu] = useMobileMenu();
  
  return (
    <div className="dark">
      <div
        className={`${className} fixed  top-0 bg-white dark:bg-primary-800 shadow-lg  h-full   w-[248px]`}
      >
        <div className="logo-segment flex justify-between items-center bg-white dark:bg-primary-800 z-[9] h-[85px]  px-4 ">
          <Link href="/">
            <div className="flex items-center space-x-4">
              <div className="logo-icon">
                {!isDark && !isSemiDark ? (
                  <img src="/assets/images/clients/riachuelo.png" alt="" />
                ) : (
                  <img src="/assets/images/clients/riachuelo.png" alt="" />
                )}
              </div>
            </div>
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="cursor-pointer text-primary-900 dark:text-white text-2xl"
          >
            <Icon icon="heroicons:x-mark" />
          </button>
        </div>

        <div
          className={`h-[60px]  absolute top-[80px] nav-shadow z-[1] w-full transition-all duration-200 pointer-events-none ${
            scroll ? " opacity-100" : " opacity-0"
          }`}
        ></div>
        <SimpleBar
          className="sidebar-menu px-4 h-[calc(100%-80px)]"
          scrollableNodeProps={{ ref: scrollableNodeRef }}
        >
          <Navmenu menus={menuItems} />
        </SimpleBar>
      </div>
    </div>
  );
};

export default MobileMenu;
