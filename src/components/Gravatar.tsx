/* eslint-disable @next/next/no-img-element */

import { formatGravatarUrl } from "../library/formatter";

export type GravatarProps = {
  name: string;
  image?: string | undefined;
  email?: string | undefined;
  [key: string]: any;
};

export const Gravatar = ({ name, image, email, ...props }: GravatarProps) => {
  if (!image) {
    image = formatGravatarUrl(email || name);
  }
  return <img src={image} alt={name} {...props} />;
};
