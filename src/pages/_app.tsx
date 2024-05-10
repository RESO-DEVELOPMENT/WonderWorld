import { AppProps } from "next/app";
import React, { FC, useEffect, useState } from "react";
import "../styles/globals.scss";
import Head from "next/head";
import Header from "@/components/organisms/header";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/organisms/footer";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { platform } from "os";
import { MyPageContext } from "@/components/useContext/setPage";
// import { MyContextGlobal } from "@/components/useContext/useContextGlobal";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    console.log("oke");
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, [router.pathname]);
  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {/* <motion.div
          key={router.pathname}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        > */}
        <Head>
          <title>Wonder World</title>
          <link
            rel="icon"
            href="https://th.bing.com/th/id/R.13b5007b669aa231303f9c2083c4e7dd?rik=POS76FSob%2fEFpg&pid=ImgRaw&r=0"
          />
        </Head>
        <MyPageContext>
          <Component {...pageProps} />
        </MyPageContext>
        {/* </motion.div> */}
      </AnimatePresence>
    </>
  );
};

export default MyApp;
