import moment from "moment";

export const preprocessMarkdown = (markdown) => {
  return markdown
    .split("\n\n")
    .filter((block) => !block.trim().startsWith("!["))
    .join("\n\n");
};

export const formatDate = (isoDateString) => {
  const formattedDate = moment(isoDateString).format("MMMM DD, YYYY");
  return formattedDate;
};
export const countDown = (isoDateString) => {
  const formattedDate = moment(isoDateString).startOf("hour").fromNow();
  return formattedDate;
};
export const formatDateDetail = (isoDateString) => {
  const formattedDate = moment(isoDateString).format("MMMM DD, YYYY HH:MM:SS");
  return formattedDate;
};

export const formatDateMonthDay = (isoDateString) => {
  const formattedDate = moment(isoDateString).format("MMMM DD");
  return formattedDate;
};
