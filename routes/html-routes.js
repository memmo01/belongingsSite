// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
// =============================================================
module.exports = function(app) {

 app.get("/", function(req, res) {
    // If the user already has an account send them to the junkDrawer page    
    res.sendFile(path.join(__dirname + "/../views/index.html"));
  });

 app.get("/insurance", function(req, res) {
    // If the user already has an account send them to the junkDrawer page    
    res.sendFile(path.join(__dirname + "/../views/insurance.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the junkDrawer page
    
    res.sendFile(path.join(__dirname + "/../views/login.html"));
  });

    app.get("/signup", function(req, res) {
    // If the user already has an account send them to the junkDrawer page
  
    res.sendFile(path.join(__dirname + "/../views/signup.html"));
  });

   app.get("/about", function(req, res) {
    // If the user already has an account send them to the junkDrawer page
  
    res.sendFile(path.join(__dirname + "/../views/about.html"));
  });

  app.get("/contact", function(req, res) {
    // If the user already has an account send them to the junkDrawer page
  
    res.sendFile(path.join(__dirname + "/../views/contactus.html"));
  });

  app.get("/team", function(req, res) {
    // If the user already has an account send them to the junkDrawer page
  
    res.sendFile(path.join(__dirname + "/../views/team.html"));
  });


  app.get("/home", function(req, res) {
    // If the user already has an account send them to the junkDrawer page
  
    res.sendFile(path.join(__dirname + "/../views/belongings.html"));
  });


  app.get("/home", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname + "/../views/belongings.html"));
  });

};
