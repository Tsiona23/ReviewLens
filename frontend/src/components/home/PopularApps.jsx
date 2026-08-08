import { Container } from "../ui/Container";
import { AppCard } from "./AppCard";
import { SectionHeader } from "./SectionHeader";

import { popularApps } from "../../data/popularApps";


export const PopularApps = () => {

  return (

    <section className="
      py-16 sm:py-20
      border-t
      border-gray-900
    ">


      <Container>


        <SectionHeader
          title="Popular Apps"
          description="See how ReviewLens can analyze the apps millions of people use every day."
        />



        <div
          className="
          mt-16
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-4
          "
        >

          {popularApps.map((app)=>(

            <AppCard
              key={app.id}
              app={app}
            />

          ))}


        </div>


      </Container>


    </section>

  );

};