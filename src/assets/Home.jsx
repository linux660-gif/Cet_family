
import ChurchHero from "./Carousel";
import ContactSection from "./Contact";
import TeamSection from "./Description";
import GivingSection from "./Giving";
import ProfileCard from "./Leadership"
import MinistriesSection from "./MinistryHome";
import SermonsSection from "./Sermons";
import TestimonialsSection from "./Testimonials";
import EventsSection from "./UpcomingEvents";



function Home(){

    return(
        <>
        <ChurchHero />
        <TeamSection />
        <EventsSection />
        <SermonsSection />
        <MinistriesSection />
        <TestimonialsSection />
        <GivingSection />
        <ContactSection />

        </>
    )
}

export default Home;