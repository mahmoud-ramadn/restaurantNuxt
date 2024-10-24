export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  css: [
    // Import Bootstrap CSS
    "bootstrap/dist/css/bootstrap.min.css",
  ],
  script: [
    // Import Bootstrap JS Bundle
    {
      src: "bootstrap/dist/js/bootstrap.bundle.min.js",
      type: "text/javascript",
      mode: "client", // Ensures this runs in the client-side only
    },
  ],
});
