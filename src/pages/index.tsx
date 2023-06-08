import Footer from "@/components/Footer";
import MainCarousel from "@/components/Landing Page/MainCarousel";
import OurFeatures from "@/components/Landing Page/OurFeatures";
import SubscriptionAndFeedback from "@/components/Landing Page/SubscriptionAndFeedback";
import Testimonials from "@/components/Landing Page/Testimonials";
import WhatWeDo from "@/components/Landing Page/WhatWeDo";


export default function Home() {
  return (
    <>

      <MainCarousel />
      <WhatWeDo />
      <OurFeatures />
      <Testimonials />
      <SubscriptionAndFeedback />

    </>
  );
}
