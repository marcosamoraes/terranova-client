"use client";

import React, { Fragment } from "react";
import useDarkMode from "@/hooks/useDarkMode";
import Link from "next/link";
import useWidth from "@/hooks/useWidth";

const Logo = () => {
  const [isDark] = useDarkMode();
  const { width, breakpoints } = useWidth();

  return (
    <div>
      <Link href="/dashboard">
        <React.Fragment>
          {width >= breakpoints.xl ? (
            <img
              src={
                isDark
                  ? "/assets/images/clients/riachuelo.png"
                  : "/assets/images/clients/riachuelo.png"
              }
              alt=""
            />
          ) : (
            <img
              src={
                isDark
                  ? "/assets/images/clients/riachuelo.png"
                  : "/assets/images/clients/riachuelo.png"
              }
              alt=""
              style={{ height: "50px" }}
            />
          )}
        </React.Fragment>
      </Link>
    </div>
  );
};

export default Logo;
