module.exports = {
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.{css,png,html,js,json}"
  ],
  "swDest": "dist/sw.js",
  runtimeCaching: [
    {urlPattern: /^https:\/\/unpkg\.com/, handler: 'cacheFirst'},
    {urlPattern: /^https:\/\/code\.jquery\.com/, handler: 'cacheFirst'},
  ]
};
