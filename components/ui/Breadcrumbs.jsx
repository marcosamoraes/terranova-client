"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { useSelector } from "react-redux";

const Breadcrumbs = () => {
  const location = usePathname();
  const locationNames = location.split("/").filter((item) => item !== "");
  const customTitle = useSelector((state) => state.breadcrumb.customTitle);

  return (
    <div className="flex space-x-3 rtl:space-x-reverse">
      <ul className="breadcrumbs">
        <li className="text-primary-500">
          <Link href="/dashboard" className="text-lg">
            <Icon icon="mage:dashboard-bar" />
          </Link>
          <span className="breadcrumbs-icon rtl:transform rtl:rotate-180">
            <Icon icon="heroicons:chevron-right" />
          </span>
        </li>
        {locationNames.map((item, index) => {
          const isLastItem = index === locationNames.length - 1;
          const path = `/${locationNames.slice(0, index + 1).join("/")}`;
          
          const displayTitle = customTitle || item;

          return (
            <li key={index} className={!isLastItem ? "text-primary-500" : ""}>
              {!isLastItem ? (
                <>
                  <Link href={path} className="capitalize">
                    {item}
                  </Link>
                  <span className="breadcrumbs-icon rtl:transform rtl:rotate-180">
                    <Icon icon="heroicons:chevron-right" />
                  </span>
                </>
              ) : (
                <span className="capitalize">
                  {displayTitle}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
