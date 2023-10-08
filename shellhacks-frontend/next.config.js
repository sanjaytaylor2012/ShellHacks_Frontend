/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    POD_IP: process.env.POD_IP,
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_POD_IP: process.env.NEXT_PUBLIC_POD_IP,
  },
  env: {
    NEXT_PUBLIC_POD_IP: process.env.NEXT_PUBLIC_POD_IP,
  }
}

module.exports = nextConfig
