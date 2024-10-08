/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "src/app/variables.scss";`
  },
  images: {
    unoptimized: true
  }
}

export default nextConfig
