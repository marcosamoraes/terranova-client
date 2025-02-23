"use client";
import Link from "next/link";
import LoginForm from "@/components/partials/auth/login-form";
import Social from "@/components/partials/auth/social";
import useDarkMode from "@/hooks/useDarkMode";

// image import

const Login = () => {
  const [isDark] = useDarkMode();
  return (
    <>
      <div className="loginwrapper">
        <div className="lg-inner-column">
          <div className="left-column relative z-[1] bg-[url('/assets/images/auth/bg.jpg')] bg-cover bg-center h-full flex items-center justify-center before:content-[''] before:block before:absolute before:inset-0 before:bg-black-500 before:bg-opacity-60 before:z-[-1] before:rounded-[10px] before:overflow-hidden">
            <div className="pt-20 flex justify-center">
              <img
                src={
                  isDark
                    ? "/assets/images/logo/logo.png"
                    : "/assets/images/logo/logo.png"
                }
                alt=""
                className="mb-10"
              />
            </div>
          </div>
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
                <div className="text-center mb-4">
                  <h4 className="font-medium">Painel do Cliente</h4>
                </div>
                <LoginForm />
              </div>
              <div className="auth-footer text-center">
                Copyright &copy; 2025 Terra Nova | Todos os Direitos Reservados.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
