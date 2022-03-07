import HomeLayout from "../../layouts/HomeLayout";
import HeroSection from "./SubHeroSection";
import SubHighlights from './SubHighlights';
import SubMessage from "../Homepage/SubMessage";
import SubOurTeam from './SubOurTeam';
import SubBenefits from './SubBenefits';
import SubRoles from './SubRoles';

const Career = () => {
    return (
        <HomeLayout> 
            <HeroSection />
            <SubHighlights />
            <SubOurTeam />
            <SubBenefits />
            <SubRoles />
            <SubMessage />
        </HomeLayout>
    )
}


export default Career
