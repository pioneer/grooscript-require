require(["ui/TextInput", "ui/Button"], function(TextInput, Button){

function UIPlaceholdersApplication() {
  var gSobject = gs.inherit(gs.baseClass,'UIPlaceholdersApplication');
  gSobject.clazz = { name: 'UIPlaceholdersApplication', simpleName: 'UIPlaceholdersApplication'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject['startup'] = function(it) {
    var input = TextInput(gs.map().add("element","#input-placeholder"));
    gs.mc(input,"render",[]);
    var button = Button(gs.map().add("element","#button-placeholder").add("title","Click me"));
    return gs.mc(button,"render",[]);
  }
  gSobject.render = function() {
    $(document).ready(this.startup);
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
var application = UIPlaceholdersApplication();
gs.mc(application,"render",[]);

});