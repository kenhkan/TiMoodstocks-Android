// Open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
win.open();

// Instantiate
var timoodstocks = require('com.kenhkan.timoodstocks');
Ti.API.info("Is it compatible? " + timoodstocks.isCompatible());
Ti.API.info("Are we logged in? " + timoodstocks.isLoggedIn());

// Use your API key/secret pair
timoodstocks.login('key', 'secret');
Ti.API.info("Are we logged in now? " + timoodstocks.isLoggedIn());

if (Ti.Platform.name == "android") {
	var proxy = timoodstocks.createScannerView({
    backgroundColor: 'blue',
		width: Ti.UI.FILL,
		height: Ti.UI.FILL,
		top: 0,
		left: 0
	});
	win.add(proxy);
}

