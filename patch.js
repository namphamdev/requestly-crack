const fs = require('fs');
const axios = require('axios');
const path = require('path');
const jsPath = path.join(__dirname, 'js/index.js');

async function downloadFile() {
	try {
		const response = await axios.get('https://app.requestly.io/assets/index-D-hRXdUZ.js');
		fs.writeFileSync(jsPath, response.data);
		console.log('File downloaded successfully');
	} catch (error) {
		console.error(error);
	}
}

async function patchFile() {
	const data = fs.readFileSync(jsPath, 'utf8');
	// find getUserSubscription=async ([A-Z, a-z]{2})=>{const
	// replace with getUserSubscription=async Br=>{return 1;const
	const patchedData = data.replace(/getUserSubscription=async ([A-Z, a-z]{2})=>{const/, 'getUserSubscription=async Br=>{return {"subscriptionEnded":0,"plan":"professional","stripeCustomerID":"cus_R6Ejsntpbfdt7a","currency":"usd","quantity":1,"subscriptionCurrentPeriodEnd":1831215368,"stripeActiveSubscriptionID":"sub_1QE2FgDiNNz2hbmONWzs4RYW","subscriptionCurrentPeriodStart":1729919368,"type":"individual","subscriptionStatus":"active","subscriptionCreated":1729919368,"cancel_at_period_end":false};const');
	fs.writeFileSync(jsPath, patchedData);
	console.log('File patched successfully');
}

async function main() {
	await downloadFile();
	await patchFile();
}

main();
