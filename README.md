Jam Template Project
====================

A starting point for creating a [Jam.js](http://jamjs.org) based project. It includes [Grunt](http://gruntjs.com) tasks for compiling and watching files.

[Jam](http://jamjs.org) is a package manager for javascript and uses [require.js](http://requirejs.org/) to handle asynchronous module loading.

[Grunt](http://gruntjs.com) is a task-based command line build tool for JavaScript projects

Installation
------------

Prerequisite: Install [Node.js](http://nodejs.org/)

    npm install grunt -g
    npm install jam -g
    cd Working-Directory/
    git clone git@github.com:rockwood/jam-template.git
    cd jam-template
    npm install
    jam install backbone && jam install hbt

Usage
-----
### Jam
Install client side dependencies with:
    
    jam install module-name

By default, Jam-Template requires `backbone` and `jade`.

More info at: [http://jamjs.org](http://jamjs.org)

### Grunt
Create a local web server at [http://localhost:8000](http://localhost:8000) and watch .coffee and .sass/.scss files for changes:
    
    grunt run

Compile dependencies and app code into the /dist directory:
    
    grunt build

### Testing

Jam-Template comes pre-installed with [Jasmine](http://pivotal.github.com/jasmine/). With the server running, hit [http://localhost:8000/test](http://localhost:8000/test).

Place specs (.js or .coffee) in the test/spec/ directory, and require them in test/SpecRunner