import Hero from "./hero";
import Chocolate from "./chocolate";
import MobileHero from "./mobileHero"

export default function Home() {
  return (
    <>
   
    <div className="hidden xl:block">
      <Hero />
    </div>
    {/* Mobile */}
    <div className=" xl:hidden">

      <MobileHero/>
    </div>


  
      <Chocolate />  


    </>


  );
}
