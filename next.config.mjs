/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: function(config) {
        // Keep any custom rules you need for handling files like PDFs
        return config;
    },
};

export default nextConfig;
