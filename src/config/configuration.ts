const Configuration = () => ({
  port: parseInt(process.env.SERVER_PORT, 10) || 3000,
  github: {
    baseUrl: process.env.GITHUB_API_BASE_URL,
    token: process.env.GITHUB_API_TOKEN,
    testToken: process.env.GITHUB_API_BASE_URL_TEST,
  },
  origin: {
    url: process.env.ORIGIN_URL,
    port: process.env.ORIGIN_PORT,
  },
});
export default Configuration;
