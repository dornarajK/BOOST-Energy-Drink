import Hero from "./hero";
import MobileHero from "./mobileHero"
import AllBoost from "./AllBoost";
import LastAllBost from "./LastAllBost"

export default function Home() {
  return (
    <>

      <div className="hidden xl:block">
        <Hero />
      </div>
      {/* Mobile */}
      <div className=" xl:hidden">

        <MobileHero />
      </div>

      <AllBoost />
      
      <LastAllBost/>




    </>


  );
}
