define(["ui/BaseWidget"], function(BaseWidget){

function TextInput() {
  var gSobject = BaseWidget();
  gSobject.clazz = { name: 'ui.TextInput', simpleName: 'TextInput'};
  gSobject.clazz.superclass = { name: 'ui.BaseWidget', simpleName: 'BaseWidget'};
  gSobject['render'] = function(it) {
    return gs.mc(gs.mc(this,"$",[gSobject.element], gSobject),"html",["<input type='text'></input>"]);
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};

return TextInput;

});