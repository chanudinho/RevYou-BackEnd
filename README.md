[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# RevYou-BackEnd 

This repository is part of the Revyou project, a tool to support the collaborative and distributed development of systematic reviews.

Read this in other languages: [Português](README.pt.md)

### Folder Structure
```
### A typical top-level directory layout

    .
    ├── node_modules			# All dependencies installed
    ├── config                  # 
    ├── sequelize               # 
    ├── src                     # Source files
	├── .sequelizerc            # 
	├── index.js                #
    ├── package.json
	├── README.pt.md 
    └── README.md

```

```
### Src directory layout
src
├── study
├── researcher  
└── project
```

### Installation

RevYou-BackEnd requires [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies and run the app.

```sh
$ git clone https://github.com/chanudinho/RevYou-BackEnd.git
$ cd RevYou-BackEnd
$ npm install
$ npm start
```

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the api in the development mode.<br>
Open [http://localhost:5000](http://localhost:5000) to test on Postman.

The application is updated automatically if you make edits.<br>
You will also see any errors in the console.

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


[node.js]: <http://nodejs.org>  
[NPM]: <https://www.npmjs.com/>
[Udacity Git Commit]: <https://udacity.github.io/git-styleguide/>
[Jest]: <https://jestjs.io/>
