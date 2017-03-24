# Blank-Project
This Repo is to store an empty version of a generally static work flow, this is mainly for use by me but feel free to download it - you may find it useful.

## How to use:
If you are interested in using my work style you will find it's pretty simple and easily expandable.
1. First clone the repo into a new folder

```
cd directory/of-your/new-folder
git clone https://github.com/AaronAMcGuire/Blank-Project .
```
2. Then whilst still in the directory of your new folder you will need to install the node-modules

```
npm i

```

3. Once this has been done you are free to explore the folders you will find the blank-project Uses
    ⋅⋅* Sass.
      The sass structure is set-up into 4 folders, the intention is to build using the BEM methodology and this structure has proven the easiest to scale.
    ⋅⋅* Grunt.
      Grunt has been setup with a few tasks already created as of this build there have been 5 grunt tasks placed inside gruntfile.js these are __sass_compile_imports__ run this when you make a new sass file - it automatically imports the new file into main.scss so you don't have to. __browser-Sync__ to be used as a web server you can either change the proxy to localhost or your virtual host.__grunt-contrib-imagemin__ used to compress images that are placed within the images folder. __grunt-contrib-watch__ is for setting watch tasks when you decide this build is for you and expand it to suit your needs. __grunt-html-validator__ used to validate your html files - doesn't always need to be used but this build is generally for mocking up static content 
