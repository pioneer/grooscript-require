package ui

import ui.BaseWidget  // produces a wrapper like define(["ui/BaseWidget"], function(BaseWidget) { ... }


class TextInput extends BaseWidget {

    def render(){
        $(element).html("<input type='text'></input>")
    }
}