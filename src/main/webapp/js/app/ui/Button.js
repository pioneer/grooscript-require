define(["ui/BaseWidget"], function(BaseWidget){

function Button() {
  var gSobject = BaseWidget();
  gSobject.clazz = { name: 'ui.Button', simpleName: 'Button'};
  gSobject.clazz.superclass = { name: 'ui.BaseWidget', simpleName: 'BaseWidget'};
  gSobject.title = "";
  gSobject['render'] = function(it) {
    return gs.mc(gs.mc(this,"$",[gSobject.element], gSobject),"html",["<button>" + (gSobject.title) + "</button>"]);
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};

return Button;

});