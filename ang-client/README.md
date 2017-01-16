## Angular Client App
This example shows a simple Angular.js application which consumes data from the Express server set up in the step before. Data can also be sent to the server to be saved. The example lacks functionality for editing and deleting data. This is deliberate, as the focus of the course is on Node and Mongo rather than any front end details. Angular was chosen as a way to quickly show how data from a Node backend can be consumed by the client side, but any front end framework can be used.

### Installation and Running the App

Make sure `http-server` is installed globally:

```
npm install -g http-server
```

Clone the repo, then:

```
http-server
```

The app will be served at `localhost:8080`.
