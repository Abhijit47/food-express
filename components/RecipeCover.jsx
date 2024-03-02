"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const fallBackSrc = "/no-image-placeholder.svg";

export default function RecipeCover({
  poster = "",
  title = "",
  coverName = "",
}) {
  const [imgSource, setImageSource] = useState(poster);

  useEffect(() => {
    setImageSource(poster);
  }, [poster]);

  if (coverName === "Recipe Card") {
    return (
      <Image
        src={imgSource}
        alt={title}
        width={800}
        height={500}
        className="mx-auto h-40 w-40 rounded-full object-cover transition-all delay-75 duration-500 hover:scale-95 xl:h-56 xl:w-56"
        priority
        onLoad={(e) => {
          // console.log(e.target.naturalWidth, e.target.naturalHeight);
          if (e.target.naturalWidth === 0) {
            setImageSource(fallBackSrc);
          }
        }}
        onError={() => setImageSource(fallBackSrc)}
      />
    );
  }

  if (coverName === "Recipe Cover") {
    return (
      <Image
        src={imgSource}
        alt={title}
        width={800}
        height={500}
        className="h-full w-full object-cover opacity-95"
        priority={false}
        onLoad={(e) => {
          // console.log(e.target.naturalWidth, e.target.naturalHeight);
          if (e.target.naturalWidth === 0) {
            setImageSource(fallBackSrc);
          }
        }}
        onError={() => setImageSource(fallBackSrc)}
      />
    );
  }

  if (coverName === "Recipe Figure") {
    return (
      <Image
        src={imgSource}
        alt={title}
        width={800}
        height={500}
        className="absolute block h-full w-full object-top opacity-55"
        priority={false}
        onLoad={(e) => {
          // console.log(e.target.naturalWidth, e.target.naturalHeight);
          if (e.target.naturalWidth === 0) {
            setImageSource(fallBackSrc);
          }
        }}
        onError={() => setImageSource(fallBackSrc)}
      />
    );
  }

  if (coverName === "User") {
    return (
      <Image
        src={imgSource}
        alt={title}
        width={800}
        height={500}
        className="aspect-square h-full w-full object-cover"
        priority={false}
        onLoad={(e) => {
          // console.log(e.target.naturalWidth, e.target.naturalHeight);
          if (e.target.naturalWidth === 0) {
            setImageSource(fallBackSrc);
          }
        }}
        onError={() => setImageSource(fallBackSrc)}
      />
    );
  }
}

// mx-auto h-40 w-40 rounded-full object-cover xl:h-56 xl:w-56
