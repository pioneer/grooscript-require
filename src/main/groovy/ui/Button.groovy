package ui

import ui.BaseWidget  // produces a wrapper like define(["ui/BaseWidget"], function(BaseWidget) { ... }


class Button extends BaseWidget {

    def title = ""

    def render(){
        $(element).html("<button>$title</button>")
    }
}