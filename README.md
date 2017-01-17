# Node REST API #

## Requirements: ##
   * **MongoDB:**
      * You will need a mongoDB uri to execute the app. You can put your database address inside the *server.js* file's `const mongodbUri`. You can comment out the line starting with `const mongooseUri`, if not using mLab's free service. In this case, do not forget to exchange `mongooseUri` to `mongodbUri` in `mongoose.connect()` later on.

## Run the application: ##
    npm install
then

    npm run start // in production mode
    npm run dev   // in developement mode

## You can easily test out the different API endpoints by: ##
   * Installing Postman extension for Chrome
   * Importing the 'node-rest-api.postman_collection.json' collection into it
   * Looking through and running the predifined requests

## Packages used: 
   * express // framework for Node.js
   * body-parser // parse a form's submitted data
   * cors // cross origin resourse sharing
   * moongoose // MongoDB object modeling tool
   * mongodb-uri // for formatting mLab's Uri to proper mongooseUri