import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { montserrat } from "@/utils/Fonts";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      {loading && <Loader />}
      <div
        className={
          "text-black dark:text-white bg-white dark:bg-black  " +
          montserrat.className
        }
      >
 <Navbar />
       
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
