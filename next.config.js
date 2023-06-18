/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true
  }
};

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});
module.exports = withMDX(nextConfig);
