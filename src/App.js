import './App.css';
import Button from './atoms/button';
import useGSAP from "./hooks/useGsap";
import SchoolBanner from './pages/01_banner';
import ParticipatingSchools from './pages/02_participating';
import PremierSchoolVideo from './pages/03_premier_video';
import ChooseSchool from './pages/04_choose';
import ExcitingOpportunities from './pages/05_opportunities';
import OtherAttraction from './pages/06_attraction';
import WhatMakes from './pages/07_what';
import ParentChoose from './pages/08_parent_choose';
import Gallery from './pages/09_gallery';
import Footer from './pages/footer';
import Navbar from './pages/Navbar';

function App() {
  useGSAP(".App-page")
  return (
    <div className="App-page">
      <Navbar/>
      <SchoolBanner/>
      {/* <Button/> */}
      <ParticipatingSchools/>
      <PremierSchoolVideo/>
      <ChooseSchool/>
      <ExcitingOpportunities/>
      <OtherAttraction/>
      <WhatMakes/>
      <ParentChoose/>
      <Gallery/>
      <Footer/>
      <div className = "font-museo font-normal bg-gradient-to-r from-[#3F186A] to-[#000E38] bg-clip-text text-transparent flex justify-center items-center blade-bottom-padding-sm mx-auto sm:w-full w-[78%] text-center gsap-fade-in">Copyright © 2025 | All rights reserved.  Premier Schools Exhibition</div>
    </div>
  );
}

export default App;
