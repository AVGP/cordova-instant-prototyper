(function(){
  window.addEventListener("deviceready", function() {
    var scanner = cordova.require("cordova/plugin/BarcodeScanner");
    scanner.scan( function (result) {
      alert(result.text);
    });
  });
}());
