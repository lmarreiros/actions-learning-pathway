/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
  },
  
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  extends: [
    //...
    'plugin:@next/next/recommended',
  ],
}

module.exports = {
  eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
}
