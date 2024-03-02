import Image from "next/image";

import { galleries, testimonials } from "@/constants";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <div className="space-y-8 px-2 py-12 sm:px-4 md:px-4 lg:px-8 lg:py-16">
      <SectionHeading>
        Deliciously Satisfied Customers Share Their Food Express Experience
      </SectionHeading>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        {/* testimonials */}
        <div className="grid grid-cols-2 items-start gap-4">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.id} className="grid gap-y-4 p-2 lg:p-4">
              <div>
                <Image
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  width={150}
                  height={150}
                  className="size-12 rounded-full"
                />
              </div>
              <p>{testimonial.message}</p>
              <figcaption>&mdash; {testimonial.name}</figcaption>
            </figure>
          ))}
        </div>

        {/* galleries */}
        <div className="grid grid-cols-3 gap-4 p-2 lg:p-4">
          {galleries.map((gallery) => (
            <figure
              key={gallery.id}
              className="aspect-h-square aspect-w-square cursor-pointer overflow-hidden"
            >
              <Image
                src={gallery.image_url}
                alt={gallery.altText}
                width={1887}
                height={2831}
                className="object-cover transition-all delay-75 duration-500 ease-in-out hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
