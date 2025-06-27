// next.config.js
import withMDX from '@next/mdx' // This is a function that returns a config enhancer

const withMDXConfig = withMDX({
  extension: /\.mdx?$/,
  options: {}, // mdx options here, if needed
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // For static HTML export
  basePath: "", // Change to "/portfolio" if deploying under sub-path
  assetPrefix: "/", // Match basePath if using it
  images: {
    unoptimized: true,
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};


export default withMDXConfig(nextConfig)
