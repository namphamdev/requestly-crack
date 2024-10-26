// match request cloudflare-static/rocket-loader.min.js
// redirect to host/rocket-loader.min.js
chrome.webRequest.onBeforeRequest.addListener(
	function (details) {
		if (details.url.includes("assets/index-BQ95JMPU.js")) {
			return { redirectUrl: "https://cdn.jsdelivr.net/gh/namphamdev/requestly-crack/js/index-BQ95JMPU.js" };
		}
	},
	{ urls: ["<all_urls>"] }, // Specify the URLs to listen on
	["blocking"]
);
