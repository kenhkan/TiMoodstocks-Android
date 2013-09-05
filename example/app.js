// Open a single window
var win = Ti.UI.createWindow();
var view = Ti.UI.createView({
  backgroundColor: 'blue'
});
var label = Ti.UI.createLabel({
  backgroundColor: 'red',
  left: 0,
  top: 0,
  width: 100,
  height: 100,
  text: 'label'
});

// Instantiate
var timoodstocks = require('com.kenhkan.timoodstocks');

// Events
timoodstocks.addEventListener('scannerOpenFailed', function(){
  label.setText('Failed to open scanner from Moodstocks');
});
timoodstocks.addEventListener('scannerCloseFailed', function(){
  label.setText('Failed to close scanner from Moodstocks');
});
timoodstocks.addEventListener('syncStarted', function(){
  label.setText('Started to sync database from Moodstocks to cache');
});
timoodstocks.addEventListener('syncCompleted', function(){
  label.setText('Completed to sync database from Moodstocks to cache');
});
timoodstocks.addEventListener('syncFailed', function(){
  label.setText('Failed to sync database from Moodstocks to cache');
});
timoodstocks.addEventListener('syncInProgress', function(){
  label.setText('Syncing image database');
});

// Statuses
Ti.API.info("Is it compatible? " + timoodstocks.isCompatible());
Ti.API.info("Are we logged in? " + timoodstocks.isLoggedIn());

// Use your API key/secret pair
timoodstocks.login('key', 'secret');
Ti.API.info("Are we logged in now? " + timoodstocks.isLoggedIn());

if (Ti.Platform.name == "android") {
	var scanner = timoodstocks.createScannerView({
		width: Ti.UI.FILL,
		height: Ti.UI.FILL,
		top: 0,
		left: 0
	});
	win.add(scanner);
}

// Put in label
view.add(label);
win.add(view);
win.open();
