import Image from "next/image";
import RecipeCover from "./RecipeCover";

export default function RecipeFigure({ recipe }) {
  return (
    <figure className="relative h-96 origin-top opacity-45  before:absolute before:block before:h-full before:w-full before:bg-gradient-to-br before:from-[#fbdb89] before:to-[#f48982]">
      <RecipeCover
        poster={recipe?.image_url}
        title={recipe?.title}
        coverName="Recipe Figure"
      />
      {/* <Image
        src={recipe?.image_url}
        alt={recipe?.title}
        width={700}
        height={500}
        className="absolute block h-full w-full object-cover opacity-55"
        priority
      /> */}
      <h1 className="absolute bottom-0 left-1/2 w-6/12 -translate-x-1/2 -skew-y-6 text-center text-4xl font-bold uppercase text-white md:-translate-y-2.5 md:leading-[4.5rem] lg:-translate-y-1/4 lg:leading-relaxed">
        <span className="bg-gradient-to-br from-[#fbdb89] to-[#f48982] box-decoration-clone px-5 tracking-wide md:py-5 lg:py-6">
          {recipe?.title}
        </span>
      </h1>
    </figure>
  );
}
