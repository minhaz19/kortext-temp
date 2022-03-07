import React from "react";
import HomeLayout from "../../layouts/HomeLayout";
import SubGetStarted from "./SubGetStarted";
import SubTestimonialSlider from "./SubTestimonialSlider";
import SubAutomateOrder from "./SubAutomateOrder";
import SubSimple from "./SubSimple";
import SubLevels from './SubLevels';
import SubFAQ from './SubFAQ';
import SubMessage from './SubMessage';
import HeroSection from "./SubHeroSection";
import SubCompanyLogos from "./SubCompanyLogos";
import SubLocalBusiness from "./SubLocalBusiness";
import SubServices from "./SubServices";
import SubGetStartedReverse from "./SubGetStartedReverse";

const index = () => {
    return (
        <HomeLayout>
            <HeroSection/>
            <SubCompanyLogos/>
            <SubLocalBusiness/>
            <SubServices/>
            <SubAutomateOrder/>
            <SubGetStarted/>
            <SubSimple/>
            <SubTestimonialSlider/>
            <SubGetStartedReverse/>
            <SubLevels />
            <SubFAQ />
            <SubMessage />
            <SubGetStartedReverse/>
        </HomeLayout>
    );
};

export default index;
