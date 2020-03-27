module.exports = {
  service: {
    endpoint: {
      name: `launchpad-lk3jvvvjnq`,
      url: `http://localhost:1337/${
        process.env.NETLIFY ? `.netlify/functions/mini-movie-db-api/` : `dev`
      }`
    }
  }
};