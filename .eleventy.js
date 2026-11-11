module.exports = async function(config) {
 const { HtmlBasePlugin } = await import('@11ty/eleventy');
 config.addPlugin(HtmlBasePlugin);
 config.addPassthroughCopy('src/assets');
 config.addFilter('ytsearch', value => 'https://www.youtube.com/results?search_query='+encodeURIComponent(value));
 return {pathPrefix: process.env.SITE_PATH_PREFIX || '/', dir:{input:'src',output:'dist',includes:'_includes'},htmlTemplateEngine:'njk'};
};
