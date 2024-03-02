import Image from "next/image";
import { featureImages } from "@/constants";

export default async function Featured() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl space-y-4 px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-gray-500">
          As Featuted In
        </h2>

        <div className="flex items-center justify-around">
          {featureImages?.map((image) => (
            <div key={image.id} className={""}>
              <Image
                className="aspect-h-video aspect-w-video h-3 w-full object-cover opacity-50 brightness-0 xs:h-4 md:h-6 lg:h-8"
                src={image.imageSrc}
                alt={image.altText}
                width={256}
                height={256}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
