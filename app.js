// require(['myFile'], function(myFile) {
//   myFile.init();
// })

require.config({
  paths: {
    "jquery": "js/lib/jquery",
    "underscore": "js/lib/underscore"
  }
})

require(['js/lib/modules/template'], function(template){
  debugger;
  template.showName("Lauren");
});