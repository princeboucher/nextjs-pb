   "/articles": { page: "/articles" },
            "/categories": { page: "/categories" },
            "/projects": { page: "/projects" },






            yarn; yarn build; yarn next export


            yarn; yarn build; yarn next export







            return config;
  },
  async redirects() {
    return [
      {
        source: "/concepts/:slug",
        destination: "/articles/:slug",
        permanent: true,
      },