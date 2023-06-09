import { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID, GOOGLE_MAPS_KEY } from '@utils/index';
import { AppConfig } from '@utils/index';
declare global {
  interface Window {
    MSStream: unknown;
  }
}

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:description" content={AppConfig.description} />
        <meta name="twitter:description" content={AppConfig.description} />

        <meta property="og:site_name" content={AppConfig.site_name} />
        <meta name="apple-mobile-web-app-title" content={AppConfig.site_name} />
        <meta name="application-name" content={AppConfig.site_name} />
        <meta property="og:title" content={AppConfig.site_name} />
        <meta name="twitter:title" content={AppConfig.site_name} />

        <meta name="keywords" content={AppConfig.keywords} />

        <meta property="og:url" content={AppConfig.site_url} />
        <link rel="canonical" href={AppConfig.site_url} />

        <meta property="og:image" content={AppConfig.social_banner_image} />
        <meta property="og:image:secure_url" content={AppConfig.social_banner_image} />
        <meta name="twitter:image" content={AppConfig.social_banner_image} />

        <meta name="twitter:site" content={AppConfig.twitter_handle} />

        <meta property="og:image:height" content="600" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="600" />
        <meta property="og:locale" content="en_US" />

        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />

        {/* Put FB APP ID */}
        {/* <meta content="" property="fb:app_id" /> */}

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/images/logo/logo-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/images/logo/logo-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/logo/logo-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/images/logo/logo-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/images/logo/logo-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/images/logo/logo-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/images/logo/logo-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/logo/logo-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logo/logo-180x180.png" />
        <meta name="msapplication-square310x310logo" content="/images/logo/logo-310x310.png" />
        <meta name="msapplication-square150x150logo" content="/images/logo/logo-150x150.png" />
        <meta name="msapplication-TileImage" content="/images/logo/logo-144x144.png" />
        <meta name="msapplication-square70x70logo" content="/images/logo/logo-70x70.png" />
        {/* <link rel="mask-icon" href="/images/logo/mask-logo.svg" color="#000000" /> */}

        <meta name="msapplication-TileColor" content={AppConfig.theme_color} />
        <meta name="theme-color" content={AppConfig.theme_color} />

        <link rel="manifest" href="/manifest.json" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        ></link>

        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_TRACKING_ID}', {page_path:window.location.pathname});`
          }}
        />
        <script
          async
          defer
          src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}&libraries=places`}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
