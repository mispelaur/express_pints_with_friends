define(['underscore', 'jquery'], function() {
  var showName = function(name) {
    var temp = _.template("Hello <%= name %>");
    $("body").html(temp({name: name}));
    debugger;
  };
  return {
    showName: showName
  };
})

