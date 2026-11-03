import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

/**
 * Same Cloudinary setup as the main site (app/lib/cloudinary.js), so IDs and
 * URLs are interchangeable between the two projects.
 */
const cld = new Cloudinary({
  cloud: { cloudName: "kylepickard" },
  url: { analytics: false },
});

const clean = (publicId) => publicId.replace(/^\/+/, "");

export function cldUrl(publicId, imageWidth = 1600) {
  return cld
    .image(clean(publicId))
    .resize(fill().width(imageWidth))
    .format("auto")
    .quality("auto")
    .toURL();
}

/** srcset so phones download a phone-sized file. */
export function cldSrcSet(
  publicId,
  widths = [640, 960, 1280, 1920, 2560],
  position = "middle",
) {
  return widths.map((w) => `${cldUrl(publicId, w, position)} ${w}w`).join(", ");
}

/** Hosted video (the Motion loop). */
export function cldVideoUrl(publicId) {
  return cld.video(clean(publicId)).format("auto").quality("auto").toURL();
}
