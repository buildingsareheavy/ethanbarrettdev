export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css/style.css");
  eleventyConfig.addPassthroughCopy("assets");
}
