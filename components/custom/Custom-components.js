import React from "react";

// core components
import Banner2 from "../banner/Banner2";

// sections for this page
import FeatureComponent from "./sections/featurecomponent";
import C2aComponent from "./sections/c2acomponent";
//import HeaderComponent from "./sections/headercomponent";
//import FooterComponent from "./sections/footercomponent";
//import BannerComponent from "./sections/bannercomponent";
//import FormBannerComponent from "./sections/formbannercomponent";
//import FeatureComponent from "./sections/featurecomponent";
//import PortfolioComponent from "./sections/portfoliocomponent";
//import PricingComponent from "./sections/pricingcomponent";
//import TeamComponent from "./sections/teamcomponent";
//import TestimonialComponent from "./sections/testimonialcomponent";
//import BlogComponent from "./sections/blogcomponent";
//import C2aComponent from "./sections/c2acomponent";
//import ContactComponent from "./sections/contactcomponent";
//import CallToAction from "../../components/call-to-action/CallToAction";

const CustomComponents = () => {
  return (
    <div>
      <Banner2 />
      <FeatureComponent />
      {/*<FormBannerComponent />*/}
      {/*<BannerComponent />*/}
      {/*<PortfolioComponent />*/}
      {/*<TeamComponent />*/}
      {/*<TestimonialComponent />*/}
      {/*<BlogComponent />*/}
      <C2aComponent />
      {/*<ContactComponent />*/}
      {/*<FooterComponent />*/}
    </div>
  );
};

export default CustomComponents;
