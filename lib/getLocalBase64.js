import { getPlaiceholder } from "plaiceholder";

export async function getBase64(imageUrl = "") {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    console.log(`base64: ${base64}`);

    return base64;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}

// For multiple images avoiding waterfall
export async function addBlurredDataUrls(images = []) {
  // Make all requests at once instead of awating each one - avoiding waterfall
  const base64Promises = images.map((photo) => getBase64(photo.imageSrc));

  // Resolve all requests in order
  const base64Results = await Promise.all(base64Promises);
  console.log(`base64Results: ${base64Results}`);

  // create blurred photos
  // const photosWithBlur = images.photos.map((photo, i) => {
  //   photo.blurredDataUrl = base64Results[i];
  //   return photo;
  // });

  // return photosWithBlur;
}
