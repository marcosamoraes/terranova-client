"use client";

import React from "react";
import Link from "next/link";
import RegForm from "@/components/partials/auth/reg-from";
import Social from "@/components/partials/auth/social";
import useDarkmode from "@/hooks/useDarkMode";
import { ToastContainer } from "react-toastify";

// image import

const Register2 = () => {
  const [isDark] = useDarkmode();
  return (
    <>
      <div className="loginwrapper">
        <div className="lg-inner-column">
          <div className="right-column relative">
            <div className="inner-content h-full flex flex-col bg-white dark:bg-slate-800">
              <div className="auth-box h-full flex flex-col justify-center">
                <div className="mobile-logo text-center mb-6 lg:hidden block">
                  <Link href="/">
                    <img
                      src={
                        isDark
                          ? "/assets/images/logo/logo.png"
                          : "/assets/images/logo/logo.png"
                      }
                      alt=""
                      className="mx-auto"
                    />
                  </Link>
                </div>
                <div className="text-center 2xl:mb-10 mb-5">
                  <h4 className="font-medium">Sign up</h4>
                  <div className="text-slate-500 dark:text-slate-400 text-base">
                    Create an account to start using Dashcode
                  </div>
                </div>
                <RegForm />
                <div className=" relative border-b-[#9AA2AF] border-opacity-[16%] border-b pt-6">
                  <div className=" absolute inline-block  bg-white dark:bg-slate-800 left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm  text-slate-500  dark:text-slate-400font-normal ">
                    Or continue with
                  </div>
                </div>
                <div className="max-w-[242px] mx-auto mt-8 w-full">
                  <Social />
                </div>
                <div className="max-w-[225px] mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-6 uppercase text-sm">
                  Already registered?
                  <Link
                    href="/login"
                    className="text-slate-900 dark:text-white font-medium hover:underline"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
              <div className="auth-footer text-center">
                Copyright &copy; 2025 Terra Nova | Todos os Direitos Reservados.
              </div>
            </div>
          </div>
          <div
            className="left-column bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(/assets/images/all-img/login-bg.png)`,
            }}
          >
            <div className="flex flex-col h-full justify-center">
              <div className="flex-1 flex flex-col justify-center items-center">
                <Link href="/login">
                  <img
                    src="/assets/images/logo/logo.png"
                    alt=""
                    className="mb-10"
                  />
                </Link>
              </div>
              <div>
                <div className="black-500-title max-w-[525px] mx-auto pb-20 text-center">
                  Unlock your Project{" "}
                  <span className="text-white font-bold">performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register2;
