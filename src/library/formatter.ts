/* eslint-disable @next/next/no-img-element */
import { format, parseISO } from "date-fns";
import md5 from "md5";

export const formatDateString = (dateString: string) => {
  const date = parseISO(dateString);
  return format(date, "LLLL d, yyyy");
}

export const formatGravatarUrl = (email: string) => {
  const hash = md5((email).toLocaleLowerCase());
  return `//s.gravatar.com/avatar/${hash}`;
}

