## Week 5:
### 1/26/2023
- updated about page blurb

### 1/25/2023
- fixed the card formatting on Restaurant List
- attempted to help Gina with the Questionnaire and Restaurant List calls

### 1/24/2023
- worked on learning how to unit test.
- completed a unit test for listing all allergies.

### 1/23/2023
- worked on Resources page
- fixed naming conventions of handle change functions for user profile forms.
- learned how to use Tailwind


## Week 4:
### 1/20/2023
- sorted out merge conflicts, built an additional account update backend 
- pulled in several directions today.  worked on UpdateAllergies and Started the Create Dietary restrictions form

### 1/19/2023
- tried to finish the UserProfile and started/completed Account Update.

### 1/18/2023
- did a lot of research on html input checkboxes
- worked more on userprofile to start setting up forms

### 1/17/2023
- this morning we spent a lot of time merging
- corrected errors with backend allergies get by id and update, and diet restrictions get by id and update functions
- Started UserProfile page and successfully got account data to show.

## Week 3:
### 1/13/2023
Gina, Jason, and I worked on front end authentication. We created the Authenticator.js file with most of the needed Account CRUD functions. We were able to make the Login.js function generate a token. The next tasks are to require a token for other authenticated pages as well as set up the routes to note which routes need to be authenticated. Two things we learned are that in JS, array destructuring allows you to use a "," to skip over any values in a list that you might not want to pull. We also learned that for an onSubmit, you want to put any functions you are calling with parameters inside a separate handleSubmit function instead of inside the onSubmit. Nat fixed some issues with sign up form and added error messages to show if email or zipcode was not properly formatted. She is almost complete with the design for that. Marison worked on and is almost done with the footer!

### 1/12/2023
- originally thought we would need specific error handling for get one, put and delete functions
- then learned that we can use the account_data dictionary that is created when a user is authenticated to pull the "id" value from there. This means we don't have to input the userid manually which removes the need for id error handling since only active ids can access those CRUD functions.

### 1/11/2023
- worked on creating routes for front-end with App.js and main.js
- created skeleton files/folders for front-end
- Zac and Gina authenticated everything but external API on back-end
- updated table to make email unique and made migrations
- started error handling for PUT and DELETE
- Marison and Jason started sign up form front-end
- completed nav bar front-end


### 1/10/2023
I drove the bus for the first half of the day
Gina finished off the day
- completed the create function for allergies and was able to get it to work
- changed child tables to unique to match the one-to-one relationship with accounts, allergies, and diet restrict
- took off the foreign key in the SQl command for queries.allergies and used just ‘references’ to connect both tables
- created CRUD functions for allergies (also made some changes to allergies classes)
- updated allergies and diet restrict table to have ‘ON DELETE CASCADE’ so that deleted accounts will also delete the allergies and diet restrict values
- created CRUD functions for diet restrict
- set up a get by id function for yelp api

### 1/9/2023
Natalie Drove the bus today
Finished CRUD functions for Accounts
Started getting our yelp api calls to work
We have tested our yelp api and learned how to call filters for url
created our allergies and dietary restrictions tables
and worked on the crud functions for the allergies table

## Week 2:
### 1/6/2023
Marison Drove the bus
finished Authentication


### 1/5/2023
Marison drove the bus
installed jwtdown-fastapi. created a routers and queries folders. 
created pydantic models UserIn UserOut and UserQueries.
created retrieve CRUD functions in all models.
Made additional Migrations
Started the authentication files.
Learned how to change the datatype on a table

### 1/4/2023 
I drove the bus today
Started the project, got our docker-compose file set up.
Set up and chose postgres database.
installed and set up pg-admin.
Learned how to make a yaml from scratch.
Added journal to journal folder.

## 1/3/2023
Worked on Routes of each page, looked at yelp api, revised api-design-user.md file, 
and learned about the yelp api additional filters.
Helped Marison fork project gamma and add all the files to platemate.

## Week 1
### 12/22/2022 
More Figma today, group collectively landed on PlateMate as the name for our app

### 12/21/2022
More Figma today, found out Foodify already exists, have to change our name

### 12/20/2022
I built out a backend design in excalidraw. Group Continued working on Figma 'wireframe'

### 12/19/2022
Built out an Excalidraw planner. Group worked on our Figma 'wireframe'