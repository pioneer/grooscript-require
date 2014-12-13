define([], function(){

function BaseWidget() {
  var gSobject = gs.inherit(gs.baseClass,'BaseWidget');
  gSobject.clazz = { name: 'ui.BaseWidget', simpleName: 'BaseWidget'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.element = null;
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};

return BaseWidget;

});
