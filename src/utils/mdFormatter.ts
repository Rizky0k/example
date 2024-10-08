import moment from "moment";

export const preprocessMarkdown = (markdown: string) => {
  return markdown
    .split("\n\n")
    .filter((block) => !block.trim().startsWith("!["))
    .join("\n\n");
};

export const formatDate = (isoDateString: string) => {
  const formattedDate = moment(isoDateString).format("MMMM DD, YYYY");
  return formattedDate;
};
export const countDown = (isoDateString: string) => {
  const formattedDate = moment(isoDateString).startOf("hour").fromNow();
  return formattedDate;
};
export const formatDateDetail = (isoDateString: string) => {
  const formattedDate = moment(isoDateString).format("MMMM DD, YYYY HH:MM:SS");
  return formattedDate;
};

export const formatDateMonthDay = (isoDateString: string) => {
  const formattedDate = moment(isoDateString).format("MMMM DD");
  return formattedDate;
};
