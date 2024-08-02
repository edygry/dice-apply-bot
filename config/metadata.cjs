const {
  author,
  dependencies,
  repository,
  version,
} = require("../package.json");

module.exports = {
  name: {
    $: "dice-auto-apply",
  },
  namespace: "",
  version: version,
  author: author,
  source: repository.url,
  // 'license': 'MIT',
  match: ["*://www.dice.com/jobs*"],
  require: [
    // `https://cdn.jsdelivr.net/npm/jquery@${dependencies.jquery}/dist/jquery.min.js`,
  ],
  grant: [
    // "GM.xmlHttpRequest"
  ],
  connect: [
    // "httpbin.org"
  ],
  "run-at": "document-end",
};
