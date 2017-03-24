# Save Our Food

===================

A web app that lets you save your food articles and alerts you the state of your food ( fresh, expiring or expired ) automatically.

----------

### Prerequisites :
    You need to have git and node installled on your machine. To install them go to your terminal then type:

 1. `sudo apt-get install git -g`
 2. `sudo apt-get install npm -g`
For windows users consult the Git and Node documentations.
  
### Installing web-app
 It's super easy. Just takes two steps :
 
 1. Download the zip file or clone the repository
 2. Open your terminal inside the downloaded folder and type `npm install`

----------

### Accessing API Endpoints**
!! All API endpoints are protected. You need to login first to access them !!

**FoodItem Endpoints**
GET `/foodApi/` - Access all fooditems that the user has saved.
POST `/foodApi/` - Add a new item to the database
DELETE `/foodApi/:id` - Deletes a item containing the id
PUT `/foodApi/:id` - Updates the item containing the id

**User Endpoints**
GET `/userApi/:id` - Gets the information of the logged user

----------

### Technologies Used

This web application was developed using MEAN stack (MongoDB, ExpressJS, AngularJS, NodeJS). Apart from the core, few libraries like Bootstrap, Sass, Bower, Mongoose, PassportJs were used for their special functionalities.
