module.exports = {
  ci: {
    collect: {
      // Just use local host lhci figures out the port for the ci build
      url: ["http://localhost:8080/"],
      staticDistDir: "./gridsome/dist/",
    },
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.8 }], // warning for now due to Akamai..
        "categories:accessibility": ["error", { minScore: 1 }],
        "categories:seo": ["error", { minScore: 0.92 }], // 0.92 due to robots file.
        "categories:bestpractices": ["error", { minScore: 1 }],
        "first-contentful-paint": ["warn", { maxNumericValue: 2000 }], // warning for now due to Akamai
      },
    },
  },
};
