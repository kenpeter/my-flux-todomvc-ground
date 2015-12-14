// Base on this, https://www.youtube.com/watch?v=X82x4MegEaQ

var EventEmitter = require("events").EventEmitter;

var getResource = function(my_set_count) {
  var e = new EventEmitter();
  process.nextTick(function() {
    var count = 0;
    e.emit("start");
    var t = setInterval(function(){
      ++count;
      e.emit("data", count);
      if(count === my_set_count) {
        e.emit("end", count);
        clearInterval(t);
      } 
    }, 10);

  });

  return e;
}

var count = 5;
var r = getResource(count);

r.on("start", function() {
  console.log("start!");
});

r.on("data", function(count) {
  console.log("data: " + count);
});

r.on("end", function(count) {
  console.log("end: " + count);
});
