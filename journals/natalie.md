# Week 4

### (Thurs) 1/19/2023

- instead of getting the modal to dismiss after submission of the sign up/login form, it has been altered to just pop up a message saying the form has been submitted (spent too much time on it cries)
- implemented rotating pizza spinner to load after submission of the sign up and login form
- Marison got the carousel to show on the main page
- Gina and Marison learned to use redux-persis for persistent data storage that can be accessed from the redux store on other pages/when a page is refreshed and they also troubleshooted the update form and fixed an issue they were having with the backend update function
- Zac and Jason fixed/completed the update profile form

### (Wed) 1/18/2023

- got sign up and login modals to work with each other on the main page
- changed login submit button to handle in the form and not the button itself
- redirected the sign up and login forms to users page
- Gina and Marison started implementation of redux for questionnarie variables, created first slice for question 1, started testing "default value" search input pulling directly form logged in user accounts table

### (Tues) 1/17/2023

- merge party!
- installed the tailwind elements dependencies to be able to use the fade in/out for the modal
- Zac and Jason fixed bugs in the functions for getting and updating allergies and diet restrictions from the backend and also began working on the UserProfile page and were able to display account information correctly
- Gina worked on the API calls for the restaurant list and restaurant detail pages to check if they function properly
- Marison and Gina are planning to convert some components to use Redux and accessing the variables from the questionnaire page through the Redux Toolkit store

# Week 3

### (Fri) 1/13/2023

- fixed some issues with sign up form and added error messages to show if email or zipcode was not properly formatted
- Marison worked on footer design
- Zac, Jason, and Gina worked on front end authentication and created the Authenticator.js file with CRUD functions, and made the Login.js function generate a token (learned about array destructuring and using a separate handleSubmit function for onSubmit events)
- updated and cleaned up response messages for sign up form and created a better design for the alert
- Jason completed the unix code conversion on the backend

### (Thurs) 1/12/2023

## Driver: Jason (morning)

- fixed skeleton sign up form to work
- updated accounts queries and accounts routers files to CRUD correctly if account does/does not exist
- worked sign up form design
- completed skeleton login form to work
- learned that account_data dictionary that is created when a user is authenticated to pull the "id" value from there, which means user id doesn't need to input manually and removes the need for id error handling since only active ids can access those CRUD functions
- completed sign up form with error handling
- was able to get sign up button to navigate the modal to pop up and exit out into home page

### (Wed) 1/11/2023

## Driver: Jason (morning) & split (afternoon)

- worked on creating routes for front-end with App.js and main.js
- created skeleton files/folders for front-end
- Zac and Gina authenticated everything but external API on back-end
- updated table to make email unique and made migrations
- started error handling for PUT and DELETE
- Marison and Jason started sign up form front-end
- completed nav bar front-end for landing page

### (Tues) 1/10/2023

## Driver: Zac(morning) & Gina(afternoon)

- completed the create function for allergies and was able to get it to work
- changed child tables to unique to match the one-to-one relationship with accounts, allergies, and diet restrict
- took off the foreign key in the SQL command for queries.allergies and used just 'references' to connect both tables
- created CRUD functions for allergies (also made some changes to allergies classes)
- updated allergies and diet restrict table to have 'ON DELETE CASCADE' so that deleted accounts will also delete the allergies and diet restrict values
- created CRUD functions for diet restrict
- created router to use GET by id with YelpAPI

### (Mon) 1/9/2023

## Driver: Natalie (Me)

- completed update for accounts
- was able to get a call back from Yelp using the imported YelpAPI, had to make two separate files in both queries and routers
- each person had their own unique YelpAPI key and made their own keys file in queries, also added file to gitignore so that it won't show up publicly
- modified url with addition of filters to YelpAPI to make calls
- created allergies and diet restrict tables
- created allergies and diet restrict files in both queries and routers
- worked on create function for allergies

# Week 2

### (Fri) 1/6/2023

## Driver: Marison (morning) & Jason (afternoon)

- changed 'users' table to 'accounts' table
- completed sign up for new accounts with hash password & authenticator
- completed login & logout
- completed CRD for accounts
  💡 Learned to create data for table through FastAPI

### (Thurs) 1/5/2023

Driver: Marison

- installed jwtdown for FastAPI
- create pydantic models for users including UserIn, UserOut, UserQueries
- inside UserQueries, we created retrieve function of CRUD to see users data
- created first user & added another migration to update zipcode to VARCHAR
- started authentication
  💡 Learned to alter the table, create pydantic models & insert data manually in pgAdmin

### (Wed) 1/4/2023

Driver: Zac

- updated the docker compose file to create the PostgreSQL to establish our database and be able to open it in Docker
- updated the requirements.txt file to add FastAPI services in order to use PostgreSQL
- created a connection pool to connect to the database
- React files were also created
- added another volume and service in the docker compose file with the installation of pgAdmin to interact with PostgresSQL servers
- used SqlDBM to visualize tables
- created our first migration
  💡 Learned to create a yaml file from scratch

### (Tues) 1/3/2023

Driver: Marison

- completed Figma that included routers and API endpoints
- worked with Yelp API to determine additional filters
- revised and replaced the API design on GitLab for users

# Week 1

### (Wed) 12/21/2022

- had to brainstorm to change project name to “Plate Mate”
- PlateMate - essentially a Yelp+ in which has qualities and features that the standard Yelp app has however, we are also implementing a questionnaire that will allow users to filter and reduce the uncertainty of what to eat
- worked on more Figma

### (Tues) 12/20/2022

- Zac built the backend design in Excalidraw
- continued to work on wire framing

### (Mon) 12/19/2022

- built out Excalidraw planner
- worked on wire framing through Figma
