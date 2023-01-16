module.exports = {
  reactStrictMode: true,
  output: "standalone",
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
};
