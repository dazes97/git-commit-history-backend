const Configuration = () => ({
  port: parseInt(process.env.SERVER_PORT, 10) || 3000,
  github: {
    baseUrl: process.env.GITHUB_API_BASE_URL,
  },
  origin: {
    url: process.env.ORIGIN_URL,
    port: process.env.ORIGIN_PORT,
  },
  enviroment: process.env.NODE_ENV,
});
export default Configuration;
