// match request cloudflare-static/rocket-loader.min.js
// redirect to host/rocket-loader.min.js
chrome.webRequest.onBeforeRequest.addListener(
	function (details) {
		if (details.url.includes("assets/index-D-hRXdUZ.js")) {
			return { redirectUrl: "https://cdn.jsdelivr.net/gh/namphamdev/requestly-crack/js/index.js" };
		}
	},
	{ urls: ["<all_urls>"] }, // Specify the URLs to listen on
	["blocking"]
);
