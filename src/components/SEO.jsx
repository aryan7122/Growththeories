import { Helmet } from "react-helmet-async";
import GrowthTheoriesHomepage from '../assets/GrowthTheoriesHomepage.png'

const SEO = ({
    title,
    description,
    keywords = [],
    canonicalPath = "",
    jsonLd,
    ogImage, }
) => {

    const siteUrl = import.meta.env.VITE_SITE_URL || window.location.origin;
    const fullCanonical = `${siteUrl}${canonicalPath}` || window.location.href;
    const ogImageUrl = ogImage ? `${siteUrl}/${ogImage}` : 'https://growththeories.vercel.app/assets/rocket-g1xUn_Ej.png'; // `${siteUrl}/default-image.jpg`;
    console.log('ogImageUrl', ogImageUrl)
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
            <meta name="author" content="Growththeories" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:image" content={ogImageUrl} />
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImageUrl} />
            <meta name="twitter:site" content="@YourTwitterHandle" />

            {/* Language & Mobile Optimization */}
            <meta httpEquiv="content-language" content="en" />
            <link rel="alternate" href={fullCanonical} hrefLang="en" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" type="image/png" href={`${siteUrl}/favicon.png`} />

            {/* ✅ JSON-LD Structured Data (If Provided) */}
            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        ...jsonLd, // 🔹 Page-Specific JSON-LD Data
                        url: fullCanonical,
                        provider: {
                            ...jsonLd.provider,
                            url: siteUrl,
                        },
                    })}
                </script>
            )}

            {/* ✅ Breadcrumb JSON-LD (For SEO) */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": `${siteUrl}`,
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": title,
                            "item": fullCanonical,
                        },
                    ],
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
