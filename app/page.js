import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";
import { updateUser } from "@/lib/action";

import HeroCard from "@/components/HeroCard";
import Featured from "@/components/Featured";
import RecipeCards from "@/components/RecipeCards";
import PriceCard from "@/components/PriceCard";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Map from "@/components/Map";
import { Suspense } from "react";

export default async function Home() {
  try {
    const user = await currentUser();

    if (user) {
      await updateUser(user);
    } else {
      redirect("/sign-in");
    }
  } catch (err) {
    console.error(err);
  }
  return (
    <section>
      <HeroCard />

      <Featured />

      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <RecipeCards />
      {/* </Suspense> */}
      {/* <PriceCard /> */}
      <Testimonials />
      <CTA />
      {/* <Map /> */}
    </section>
  );
}
