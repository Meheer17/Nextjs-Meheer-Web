export default async function sitemap() {
  const rec = [
    {
      url: 'https://meheer.vercel.app/',
      lastModified: new Date(),
    },
    {
      url: 'https://meheer.vercel.app/projects/all',
      lastModified: new Date(),
    },
    {
      url: 'https://meheer.vercel.app/certificates',
      lastModified: new Date(),
    },
    {
      url: 'https://meheer.vercel.app/aboutme',
      lastModified: new Date(),
    },
  ] 
  return rec;
}