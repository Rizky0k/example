export const getBlogList = async () => {
  const res = await fetch(`${process.env.API_URL}`);
  const data = await res.json();
  return data.results;
};
export const getBlogDetail = async (slug: string) => {
  const res = await fetch(`${process.env.API_URL}/${slug}`);
  const data = await res.json();
  return data.results;
};
