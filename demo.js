var page = require('webpage').create();
page.viewportSize = {
	width: 1200,
	height: 800
};
page.open('http://www.ixigo.com/sheraton-park-hotel-towers-chennai-chennai-india-hid-16903', function() {
  console.log(page.plainText);
  phantom.exit();
});
