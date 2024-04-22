"use client";

import Aos from "aos";
import { useEffect } from "react";
import SrollTop from "../components/common/ScrollTop";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "../styles/index.scss";
import { Provider } from "react-redux";
import { store } from "../store/store";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
      />
      <link
          href="https://fonts.googleapis.com/css2?family=Helvetica:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
      />
      <link
          href="https://fonts.googleapis.com/css2?family=AR+One+Sans:wght@400..700&family=Kalam:wght@300;400;700&family=Kufam:ital,wght@0,400..900;1,400..900&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Saira+Semi+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"/>
      <link rel="icon" href="./nepalhaven-icon.ico"/>
    </head>
    <body>
    <main>
      <Provider store={store}>
        {children}
        <SrollTop/>
      </Provider>
    </main>
    </body>
    </html>
  );
}
