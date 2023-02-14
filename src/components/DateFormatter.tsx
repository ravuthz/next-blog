import { formatDateString } from "@/library/formatter";

export type DateFormatterProps = {
  dateString: string;
};

export const DateFormatter = ({ dateString }: DateFormatterProps) => {
  return (
    <time className="text-slate-400" dateTime={dateString}>
      {formatDateString(dateString)}
    </time>
  );
};
