var host = "https://github.com/namphamdev/requestly/js/index-BQ95JMPU.js";
// match request cloudflare-static/rocket-loader.min.js
// redirect to host/rocket-loader.min.js
chrome.webRequest.onBeforeRequest.addListener(
	function (details) {
		if (details.url.includes("index-BQ95JMPU.js")) {
			return { redirectUrl: host + "/index-BQ95JMPU-m.js" };
		}
	},
	{ urls: ["<all_urls>"] }, // Specify the URLs to listen on
	["blocking"]
);
