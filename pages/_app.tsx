import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as ga from "../lib/ga";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="loadScript" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', "${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}");
  		`}
      </Script>
      <NextSeo
        title="Nicholas Lee Jun Yi - Software Engineer"
        description="With experience in both product management and software development, I'm able to bridge the gap between business and technology. My strengths lie in translating user needs into well-designed solutions, working across the entire product lifecycle from conception to development and launch."
        canonical="https://nicholaslee.dev/"
        openGraph={{
          url: "https://nicholaslee.dev/",
          title: "Nicholas Lee Jun Yi - Software Engineer",
          description:
            "With experience in both product management and software development, I'm able to bridge the gap between business and technology. My strengths lie in translating user needs into well-designed solutions, working across the entire product lifecycle from conception to development and launch.",
          images: [
            {
              url: "https://www.nicholaslee.dev/nldark.png",
              width: 1200,
              height: 630,
              alt: "Nicholas Lee - Software Engineer",
            },
          ],
          site_name: "Nicholas Lee Jun Yi",
        }}
      />
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <meta
          name="google-site-verification"
          content="Sb0zLqSuvrlKL7h4448tGMOoCvNjsNYeSjNeuEqPw6g"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
