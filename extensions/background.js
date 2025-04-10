// match request cloudflare-static/rocket-loader.min.js
// redirect to host/rocket-loader.min.js
chrome.webRequest.onBeforeRequest.addListener(
	function (details) {
		if (details.url.includes("assets/index-D-hRXdUZ.js")) {
			return { redirectUrl: "https://cdn.jsdelivr.net/gh/namphamdev/requestly-crack/js/index.js" };
		}
		if (details.url.includes("ffp.tactiq.io/proxy")) {
			return { redirectUrl: "https://cdn.jsdelivr.net/gh/namphamdev/requestly-crack/json/tactiq.json" };
		}
	},
	{ urls: ["<all_urls>"] }, // Specify the URLs to listen on
	["blocking"]
);
