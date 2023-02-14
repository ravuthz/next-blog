import Link from "next/link";

export type ContentLinkProps = {
  href: string;
};
export const ContentLink = ({
  href,
  ...props
}: ContentLinkProps): JSX.Element => {
  const isInternalLink = href.startsWith("/") || href.startsWith("#");

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};
