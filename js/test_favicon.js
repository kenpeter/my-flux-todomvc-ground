var favicon = require("favicon");
var url = "http://nodejs.org/";
favicon(url, function(err, favicon_url){
  console.log(favicon_url);
});
