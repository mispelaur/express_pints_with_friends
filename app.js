// require(['myFile'], function(myFile) {
//   myFile.init();
// })

require.config({
  paths: {
    "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min",
    "underscore": "lib/underscore"
  }
})

require(['lib/modules/template'], function(template){
  debugger;
  template.showName("Lauren");
});