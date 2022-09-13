# ExpressBlogger1

## class Notes

- .gitignore is the lisot of files that will be ignored by git
- we want node_modules to be ignored because of the larger folder size
- When we collaborate with other devs, we clone the repository WITHOUT the node_modules and then we run 'npm i' to install the node_modules

- Generators like express-generator will create the boilerplate framework code for us, and then we run 'npm i' to download the list of dependencies

- the package.json comes with a "scripts" config, in there you can define small blocks of code that can be easily invoked from the command line with 'npm run <scriptName>'
- _note_: for the "start" script, you only need to run "npm start"

- When we run "npm start" and the command "nnode./bikn/www" is invoked, the ./bin/www file will run our app.js file code, which will eventually include all of the code we will write for Express.
- the 404 status code means that the url/route we requested does not exist or is not configured properly in Express

- every request returns a status code that are grouped into blocks
- 100 status codes are not used anymore
- 200 status codes mean success
- 300 status code mean partial success
- 400 status code means web error
- 500 status codes mean server errors

- in order to get code from one file iknto another, we need to use the javascript require() statement.
-import/export
-_quick Aside_: reuqire is being phased out in favore of import/export syntax. However, when we are working in a Express environment we need to still use require() because of node limitations
- _NOTE_: So for Express we need to use require() and module. exports syntax
- require() brings in code from the file we specify in the file path
- module.exports exports code form a file
- _NOTE_:module.exports = router; is sending the router variabler from the route file
- var indexRouter = ('./routes/index'); is bringing the router variable in the current file as the variable indexRouter
- app.use('/', indexRouter); is importing the routers we define on indexRouter into our server so that we are exposed as routes.
    - the first argument is the base path for this router
    -the second argument is the router variable
    - _Important_: All the route path in our indexRouter are going to be appended to the base path
        - in users.js:
            - router.get('/all', function(req, res, next) {
        res.send('respond with a resource');
        });
        in app.js:
        var usersRouter = require('./routes/users');
            app.use('./users', usersRouter);
            the '/all' path for the route we created in users.js is going to be APPENDED





            ## Class notes - day 2:

            - Server-side Validation is checking the request inputs before the CRUD operation is executed.

            - _NOTE_: Server-side validation is required to be implemented for all full stack websites/applications
            
            - package.json
                - dependencies are the libraries/node_modules that are reequired for our application to run
                - devDependencies are the librareies/node_moduiles that are only needed when doing development work
                - _NOTE_: If you are running 'npm i' in a project for the first time after cloining the repo
            - Nodemon
                - Nodemon is a developer library that will restart the server automatically when any of the files inside the repo are changed.