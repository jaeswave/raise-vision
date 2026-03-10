import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, url }) {
  const siteName = "Raisevision Logistics";
  const siteUrl = "https://raisevisionlogistics.com";

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>

      <meta name="description" content={description} />

      <link rel="canonical" href={`${siteUrl}${url || ""}`} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${siteUrl}${url || ""}`} />
    </Helmet>
  );
}
