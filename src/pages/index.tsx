import MainCarousel from "@/components/Landing Page/MainCarousel";
import OurFeatures from "@/components/Landing Page/OurFeatures";
import SubscriptionAndFeedback from "@/components/Landing Page/SubscriptionAndFeedback";
import Testimonials from "@/components/Landing Page/Testimonials";
import WhatWeDo from "@/components/Landing Page/WhatWeDo";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Helping you thorugh!</title>
      </Head>
      <MainCarousel />
      <WhatWeDo />
      <OurFeatures />
      <Testimonials />
      <SubscriptionAndFeedback />
    </>
  );
}
