// Open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

// Instantiate
var timoodstocks = require('com.kenhkan.timoodstocks');
Ti.API.info("Module is: " + timoodstocks);
Ti.API.info("Is it compatible? " + timoodstocks.isCompatible());
Ti.API.info("Are we logged in? " + timoodstocks.isLoggedIn());

// Use your API key/secret pair
timoodstocks.login('key', 'secret');
Ti.API.info("Are we logged in now? " + timoodstocks.isLoggedIn());

if (Ti.Platform.name == "android") {
	var proxy = timoodstocks.createExample({
		message: "Creating an example Proxy",
		backgroundColor: "red",
		width: 100,
		height: 100,
		top: 100,
		left: 150
	});

	proxy.printMessage("Hello world!");
	proxy.message = "Hi world!.  It's me again.";
	proxy.printMessage("Hello world!");
	win.add(proxy);
}

