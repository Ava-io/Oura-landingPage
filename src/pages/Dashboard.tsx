import NavComponent from "../components/Nav/NavComponent";
import HeroComponent from "../components/Hero/HeroComponent";
import heroImage from "../assets/why-oura-card.jpg.avif";
import SectionTwoComponent from "../components/Section2/SectionTwoComponent";
import Sectionn3Component from "../components/Section3/Sectionn3Component";

const Dashboard = () => {
  return (
    <div className="bg-[#f7f1e8]">
      <div
        className="relative h-screen bg-cover bg-center rounded-b-[25px]"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full z-20">
          <NavComponent />
        </div>

        {/* Hero Text */}
        <div className="relative z-10 flex h-full items-center px-10">
          <HeroComponent />
        </div>
      </div>

      <div>
        <SectionTwoComponent />
      </div>

      <div>
        <Sectionn3Component/>
      </div>
    </div>
  );
};

export default Dashboard;
