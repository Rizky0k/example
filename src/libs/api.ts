export const getBlogList = async () => {
  const res = await fetch(`https://turkisme-api.vercel.app/post`);
  const data = await res.json();
  return data.results;
};
export const getBlogDetail = async (slug: string) => {
  const res = await fetch(`https://turkisme-api.vercel.app/post/${slug}`);
  const data = await res.json();
  return data.results;
};
