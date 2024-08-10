/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en-US', 'fr', 'tr-TR'], // Desteklenen diller ve bölgeler
        defaultLocale: 'en-US', // Varsayılan dil ve bölge
      },
};

export default nextConfig;
