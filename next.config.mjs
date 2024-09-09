/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: function(config) {
        // Keep any custom rules you need for handling files like PDFs
        return config;
    },
    trailingSlash: false, // Ensures proper URL handling without trailing slashes
};

export default nextConfig;
