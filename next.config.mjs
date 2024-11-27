/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: "/",
            destination: "/move-list",
            permanent: false,
          },
        ];
      },
};

export default nextConfig;
