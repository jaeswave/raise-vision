import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, keywords, url, image }) {
  const siteName = "Raisevision and Company Limited";
  const siteUrl = "https://raisevisionlogistics.com";
  const defaultImg = `${siteUrl}/raisevision-logo.png`;

  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const ogImage = image || defaultImg;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={`${siteUrl}${url || ""}`} />

      {/* Open Graph (WhatsApp, Facebook, LinkedIn previews) */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${siteUrl}${url || ""}`} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Extra */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="NG-LA" />
      <meta name="geo.placename" content="Lagos, Nigeria" />
    </Helmet>
  );
}
