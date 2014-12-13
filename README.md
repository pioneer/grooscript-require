grooscript-require
==================

A demo with Grooscript compiled files managed by RequireJS

#### Warning! If you run ./gradle convert, it will overwrite all existing .js files with those which don't contain RequireJS wrappers

This repository serves as Grooscript enhancement proposal, as well as the example of how RequireJS can help in managing packages and package dependencies, if `import` statements would be converted into `define` or `require` wrappers.

The main difference with existing Grooscript compiler is that all resulting *.js* files have RequireJS wrappers (see below).

**Define** wrapper - I used it everywhere except startup script. It declares a module and all needed dependencies for the module. It's RequireJS' responsibility to fetch these dependencies in correct order. I'll repeat here it's syntax, more details you can find in [official documentation](http://requirejs.org/docs/api.html).

```JavaScript
// myClass.js

// RequireJS beginning wrapper start
define(['path/to/module1', 'path/to/module2'], function(module1, module2){
// RequireJS beginning wrapper end

// Grooscript-compiled code start
    function myClass() {
        ...
    };
// Grooscript-compiled code end

// RequireJS ending wrapper start
    return myClass;
});
// RequireJS ending wrapper end
````

**Require** wrapper - I used it *only* in startup script, just because it's entry point, and the startup script itself is never intended to be imported. Key difference is that, with `require`, you don't need to export anything outside the script with `return` statement, as shown above. So, thus you don't have to have a single class in startup script, and can do any initialization logic outside of all classes.

```JavaScript
// main.js

// RequireJS beginning wrapper start
require(['path/to/module1', 'path/to/module2'], function(module1, module2){
// RequireJS beginning wrapper end

// Grooscript-compiled code start
    ...
// Grooscript-compiled code end

// RequireJS ending wrapper start
});
// RequireJS ending wrapper end
```

Now, below is a complete list of differencies with existing Grooscript compiler.

* all `import` statements are converted to RequireJS wrappers, as listed above
* directory structure of Groovy files is kept the same for *.js* compiled files, i.e. `src/main/groovy/ui/BaseWidget.groovy` will go to `src/main/webapp/js/app/ui/BaseWidget.js` (otherwise RequireJS won't work)
* there's `entryPoint` setting in `build.gradle`, which marks the script that should be startup script and wrapped by `require` instead of `define`
* `index.html` contains `<script data-main="js/app/main" src="js/app/require.js"></script>` tag, which includes RequireJS and points to startup script
* `require.js` is the only library file that is placed in `app` folder instead of `lib`, it's possible to have it later in `lib` and keep code layout more consistent
* all paths mentioned in `require` or `define` (and thus in `import` statements), for now are relative to the place where `require.js` stays, that's why it's in `app` folder (see above)

#### Questions, suggestions

* Will it be easier to have just `source = 'src/main/groovy'` in `build.gradle`? For RequireJS, we **have** to preserve existing folder structure.
* Grooscript and jQuery dependendcies can be also managed by RequireJS, via configuration options. This will allow us to have all JS stuff under control and be able to run optimizations, minifications and getting into a single *.js* file compilation scripts against all the code in the project.

Any feedback is welcome.