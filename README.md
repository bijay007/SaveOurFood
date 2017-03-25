# Save Our Food
===================

[![MongoDB](https://github.com/bijay007/SaveOurFood/blob/master/public/stylesheets/logos/mongodb.png)](https://www.mongodb.com/)
[![ExpressJS](https://github.com/bijay007/SaveOurFood/blob/master/public/stylesheets/logos/expressjs.png)](http://expressjs.com/)
[![AngularJS](https://github.com/bijay007/SaveOurFood/blob/master/public/stylesheets/logos/angularjs.png)](https://angularjs.org/)
[![NodeJS](https://github.com/bijay007/SaveOurFood/blob/master/public/stylesheets/logos/nodejs.png)](https://nodejs.org/)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) 
[![HTML5, CSS3 and JS](https://github.com/bijay007/SaveOurFood/blob/master/public/stylesheets/logos/html5-css3-js.png)](https://www.w3.org/) 
[![Bootstrap](https://github.com/bijay007/SaveOurFood/blob/master/public/stylesheets/logos/bootstrap.png)](http://getbootstrap.com/) 
[![SASS](https://github.com/bijay007/SaveOurFood/blob/master/public/stylesheets/logos/sass.png)](http://sass-lang.com/) 
[![Bower](https://github.com/bijay007/SaveOurFood/blob/master/public/stylesheets/logos/bower.png)](https://bower.io//) 
[![Skylab](https://github.com/bijay007/SaveOurFood/blob/master/public/stylesheets/logos/skylab-56.png)](http://www.skylabcoders.com/)

A web app that lets you save your food articles and alerts you the state of your food ( fresh, expiring or expired ) automatically.

----------

### Prerequisites :
    You need to have git and node installed on your machine. To install them go to your terminal then type:

 1. `sudo apt-get install git -g`
 2. `sudo apt-get install node -g`  
 
For windows users consult the Git and Node documentations.
  
### Installing the web-app in your local machine

    It's super easy. Just takes two steps :
 1. Download the zip file or clone the repository
 2. Open your terminal inside the downloaded folder and type `npm install`

----------

### Accessing API Endpoints
!! All API endpoints are protected. You need to login first to access them !!

**FoodItem Endpoints**

GET `/foodApi/:id` - Gets the information of single item with the given id.  
GET `/foodApi/` - Access all fooditems that the user has saved.  
POST `/foodApi/` - Add a new item to the database.  
DELETE `/foodApi/:id` - Deletes a item containing the given id.  
PUT `/foodApi/:id` - Updates the item containing the given id.  

**User Endpoints**  

GET `/userApi/:id` - Gets the information of the logged user

----------

### Technologies Used

This web application was developed using MEAN stack (MongoDB, ExpressJS, AngularJS, NodeJS). Apart from the core, few modules like Bootstrap, Sass, Bower, Mongoose, PassportJs were used for their special functionalities.
