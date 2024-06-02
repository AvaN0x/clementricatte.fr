import dayjs from "@/dayjs";

type FormatRangeOptions = {
  ignoreDay?: boolean;
};

const FORMAT_DAY = "D MMMM";
const FORMAT_DAY_YEAR = "D MMMM YYYY";
const FORMAT_MONTH = "MMMM";
const FORMAT_MONTH_YEAR = "MMMM YYYY";

export const formatRange = (
  start: Date | dayjs.Dayjs,
  end?: Date | dayjs.Dayjs,
  { ignoreDay }: FormatRangeOptions = {}
): string => {
  const startDate = dayjs(start);
  const endDate = end ? dayjs(end) : undefined;

  const formatYear = ignoreDay ? FORMAT_MONTH_YEAR : FORMAT_DAY_YEAR;
  const formatNoYear = ignoreDay ? FORMAT_MONTH : FORMAT_DAY;

  if (!endDate) {
    return `${startDate.format(formatYear)} - Aujourd'hui`;
  } else if (startDate.isSame(endDate, "year")) {
    return `${startDate.format(formatNoYear)} - ${endDate.format(formatYear)}`;
  }
  return `${startDate.format(formatYear)} - ${endDate.format(formatYear)}`;
};
