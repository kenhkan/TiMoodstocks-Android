// Open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
win.open();

// Instantiate
var timoodstocks = require('com.kenhkan.timoodstocks');

// Events
timoodstocks.addEventListener('scannerOpenFailed', function(){
  Ti.API.info('Failed to open scanner from Moodstocks');
});
timoodstocks.addEventListener('scannerCloseFailed', function(){
  Ti.API.info('Failed to close scanner from Moodstocks');
});
timoodstocks.addEventListener('syncStarted', function(){
  Ti.API.info('Started to sync database from Moodstocks to cache');
});
timoodstocks.addEventListener('syncCompleted', function(){
  Ti.API.info('Completed to sync database from Moodstocks to cache');
});
timoodstocks.addEventListener('syncFailed', function(){
  Ti.API.info('Failed to sync database from Moodstocks to cache');
});
timoodstocks.addEventListener('syncInProgress', function(){
  Ti.API.info('Syncing image database');
});

// Statuses
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

