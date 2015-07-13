// require(['myFile'], function(myFile) {
//   myFile.init();
// })

require.config({
  paths: {
    "jquery": "lib/jquery",
    "underscore": "lib/underscore"
  }
})

require(['lib/modules/template'], function(template){
  template.showName("Lauren");
  hi();
});

