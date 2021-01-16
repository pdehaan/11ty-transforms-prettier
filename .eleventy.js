const prettier = require("prettier");

module.exports = (eleventyConfig) => {
  eleventyConfig.addTransform("prettier", (content, outputPath) => {
    if (outputPath.endsWith(".html") && process.env.NODE_ENV !== "production") {
      return prettier.format(content, { parser: "html" });
    }
    return content;
  });

  return {
    dir: {
      input: "src",
      output: "www",
    },
  };
};
