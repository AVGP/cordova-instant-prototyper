(function(){
  console.log("Loaded");
  document.addEventListener("deviceready", function() {
    console.log("READY");
    var scanner = cordova.require("cordova/plugin/BarcodeScanner");
    scanner.scan( function (result) {
      var iframe = document.createElement("iframe");
      iframe.id = "content";
      iframe.src = result.text;
      document.body.appendChild(iframe);
    }, function(err) { alert("Whoopsies: ", err); });
  });
}());
