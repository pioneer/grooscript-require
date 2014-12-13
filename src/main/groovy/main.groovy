import org.grooscript.asts.GsNative
import ui.TextInput
import ui.Button


class UIPlaceholdersApplication {

    def startup() {
        def input = new TextInput(element: "#input-placeholder")
        input.render()

        def button = new Button(element: "#button-placeholder", title: "Click me")
        button.render()
    }

    @GsNative
    def render() {/*
        $(document).ready(this.startup);
    */}
}


def application = new UIPlaceholdersApplication()
application.render()
