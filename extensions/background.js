// match request cloudflare-static/rocket-loader.min.js
// redirect to host/rocket-loader.min.js
chrome.webRequest.onBeforeRequest.addListener(
	function (details) {
		if (details.url.includes("assets/index-D-hRXdUZ.js")) {
			return { redirectUrl: "https://cdn.jsdelivr.net/gh/namphamdev/requestly-crack/js/index.js" };
		}
		// if (details.url.includes("ffp.tactiq.io/proxy")) {
		// 	return { redirectUrl: "https://cors.node.np-platform.com/cdn.jsdelivr.net/gh/namphamdev/requestly-crack/json/tactiq.json" };
		// }
		if (details.url.includes("index-BhlJ3G6D.js")) {
			return { redirectUrl: "https://cors.node.np-platform.com/cdn.jsdelivr.net/gh/namphamdev/requestly-crack/js/tactiq.js" };
		}
		// if (details.url.includes("TranscriptSection-CK3ZwB4O.js")) {
		// 	return { redirectUrl: "https://app.tactiq.io/TranscriptSection-CK3ZwB4O.js" };
		// }
		// if (details.url.includes("SignInPage-Dzmhbxq7.js")) {
		// 	return { redirectUrl: "https://app.tactiq.io/SignInPage-Dzmhbxq7.js" };
		// }
		// if (details.url.includes("i18n-BXcV12qq.js")) {
		// 	return { redirectUrl: "https://app.tactiq.io/i18n-BXcV12qq.js" };
		// }
		// if (details.url.includes("WelcomePage-DuoZbedX.js")) {
		// 	return { redirectUrl: "https://app.tactiq.io/WelcomePage-DuoZbedX.js" };
		// }
	},
	{ urls: ["<all_urls>"] }, // Specify the URLs to listen on
	["blocking"]
);
