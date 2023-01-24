# Journal

## Week 5:

### Monday 1/24/23
Wow crunch week! I had a fairly productive weekend actually but I am grouping it all to keep things consistent. Over this weekend and today, I was able to complete the following:
- make multiple react slices including for user, restaurant list, dietary needs
- make cards for restaurant list
- make modals for restaurant detail
- fix update dietary needs page to have default values as option values in drop down
- get the yelp API to work with Marison with actual user input data from questionnaire
- figure out the Yelp Date/Time issue with why we couldn't get restaurants on Sunday (M-Su cycle for API) also with Marison
- create validation checks for signup and login for duplicate email and incorrect credentials respectively
- slice for allergies and diet restrictions
- fix the Nav to have the "hello user"
- made a Refresh User slice to autoupdate when profile is updated for Nav

## Week 4:

### Friday 1/20/23
We started off our day with another merge party which would you believe led to some merge issues. We resolved those by correcting a pydantic model on the back end and creating a new one specifically for updateMarison and I completed the questionnaire form and will work later tonight to make sure everything gets into redux store. We also have the questionnaire page redirecting to the restaurant list which still has the tester API on it. As soon as we get redux store working, we can test the actual API call. Marison worked her magic on the form and it looks amazing! We did have to download an additional dependency for multi select which looks great. Nat finished designing the user profile page which looks amazing and also fixed the footer. Zac worked on updating the tables for allergies and dietary restrictions while Jason worked on getting functioning checkboxes for toggling on the user profile.

### Thursday 1/19/23
Today was a busy day! Instead of having the modal dismiss after submission of the sign up/login form, she altered the onSubmit to just pop up a message saying the form has been submitted. She also implemented a rotating pizza spinner to load after submission of the sign up form. Marison and I learned that we had to use redux-persist for persistent data storage that we can access from the redux store on other pages/when the page is refreshed. Marison and I worked on getting that set up, and we should officially have persisted state! Fun thing we learned today is that state can be rehydrated? Need to read up more on that! Zac, Jason and I troubleshooted the update form and fixed an issue we were having with the backend update function. Marison additionally worked on a carousel for the main page. Zac and Jason worked on the updated profile form and are working on checkboxes to turn off and on allergies.

### Wednesday 1/18/23
We started off our day trying to help Nat with a few design bugs with the modals. Once we had reached a stopping point there, we split up into groups. Nat was able to get sign up and login modals working with each other on the main page. She also changed the login submit button to handle through form submit and not an onClick on the button. Marison and I started implementation of redux for questionnaire variables. We created out first slice for question 1 and can see the variable in the redux store. We started testing using "default value" in the form we created for questionnaire to see if we could pull directly from the logged in users table. Most of our day was redux research. Zac and Jason worked on the user profile page including the user profile update form.

### Tuesday 1/17/23
Over the weekend, I completed front end auth and tested it on the restaurant list page and restaurant detail page which both now have front end authenticated API calls. I also worked on the restuarant list and restaurant detail page API calls to see if those would work. Jason completed the unix code conversion on the backend. Marison completed the footer. Nat completed the signup modal as well as worked on login modal.

Today we spent our morning merging all the changes from this weekend (can you say merge party?). Jason and Zac worked on the user profile pages. While doing that, they corrected the get_by_id router calls, since we changed the account_id to come from login instead of user input. Nat was able to get Tailwind Elements downloaded correctly and work on transitions for our modals. Marison and I are changing some components over to Redux to access Redux Toolkit store for variables that we are getting from the questionnaire page.

## Week 3:

### Friday 1/13/23
Zac, Jason, and I worked on front end authentication. We created the Authenticator.js file with most of the needed Account CRUD functions. We were able to make the Login.js function generate a token. The next tasks are to require a token for other authenticated pages as well as set up the routes to note which routes need to be authenticated. Two things we learned are that in JS, array destructuring allows you to use a "," to skip over any values in a list that you might not want to pull. We also learned that for an onSubmit, you want to put any functions you are calling with parameters inside a separate handleSubmit function instead of inside the onSubmit. Nat fixed some issues with sign up form and added error messages to show if email or zipcode was not properly formatted. She is almost complete with the design for that. Marison worked on and is almost done with the footer!

### Thursday 1/12/2023
Zac and I were split up again working on auth. We originally thought we would need specific error handling for get one, put and delete functions. We then learned that we can use the account_data dictionary that is created when a user is authenticated to pull the "id" value from there. This means we don't have to input the userid manually which removes the need for id error handling since only active ids can access those CRUD functions. Nat and Marison worked on design and were able to get a signup modal working! Jason was able to complete a login form without the authentication piece which we are working on tomorrow.

### Wednesday 1/11/2023
Before we split up into groups, we created skeleton files and folders for our front end. We set up MainPage.js and app.js as a group to have a template, and then we split into groups. Zac and I are worked on completing backend authorization and finished authorizing all routes except for the external API. We also updated the accounts table to make email a unique entry. We also noticed that the put and delete fields need some error handling which we will handle tomorrow. Marison and Jason worked on the signup form which we are very close to completing. Nat was able to download TailWind which we are using instead of Bootstrap and she finished our unauthenticatd user Nav.

### Tuesday 1/10/2023

Today we were able to complete the CRUD functions for allergies and diet_restrict tables. We changed the account_id FK on both tables to be unique and on delete cascade so that if the parent (account) table is deleted, the child (allergies & diet_restrict) table will be deleted.

We are now going to work on the get one restaurant from the Yelp API using a unique API call.

### Monday 1/9/2023

Today we were able to finish our update function. We also were able to make a call to our Yelp API using the FastAPI Swagger tool as a get function. We had to create a header which we called along with the url and a gitignored keys.py file. After lunch, we are going to work on custom url instead of a preset one which we used for testing, and also work on creating additional tables with foreign key relationships.

It is now after lunch, and we were able to set and test custom filters on the URL for our Yelp API call! We also made an allergies and diet_restrict table. We are currently working on the create function for allergies which we are having issuses with because of the foreign key.

## Week 2:

### Friday 1/6/2023

Today we were able to get JWT authentication working to be able to create an authenticated user! We originally had a user table which we changed to an accounts table in order for it to work with the jwt library we were provided. We had to change all of our user variables and functions to accounts to ensure that we could get accounts to work. We also got all functionality for Accounts to work outside of update (CRD from CRUD).

### Thursday 1/5/2023

We started today with the plan of working on JWT authentication. To do so, we had to first create our pydantic models for User including UserIn, UserOut, and UserQueries. Inside UserQueries, we created the retrieve functions from CRUD for the User table. We learned how to alter a column using the ALTER command in SQL and added a row using the PgAdmin tool. We were able to see this data using the router endpoints that we created today as well. We started on Authentication, but are running into issues with our users.py file specifically with the UserQueries.

### Wednesday 1/4/2023

We started setting up our project today with code! We set up the YAML file to have multiple microservices (including GHI for React, API, and Postgres database) essentially from scratch. We also decided on and created a Postgres database named platemate. Additionally, we set up pgadmin and are playing with that tool. We also set up our first migration with our User table, and we can see the fields that we set up as well.

### Tuesday 1/3/2023

We completed our Figma to include the endpoints for our Routers. We also worked with the Yelp API to determine additional filters using the Yelp categories for “restaurants”. We chose restaurants as our main term filter instead of food because it looks like restaurant term includes some of the food categories as well. We also forked the main project from the SJP directory. We then manually copied the files into PlateMate and should have a working directory. We haven’t cloned individually because we are still trying to figure out what to do with our database at this point.

## Week 1

###Thursday 12/22/22
We learned we had to change our name last night because Foodify is already taken. We updated our name to PlateMate instead! We don't have too much information on the backend yet, but we are going to use some of the break to map out more of what the yelp API can give us. We also found out yesterday that an existing app called Restaurant Roulette is also using the Yelp API, so I am definitely curious to look more into the filtering capabilities that they tapped into that we can as well. We also started working on the API framework for our app.

### Wednesday 12/21/22

Today we are working on completing the wireframe using the Figma tool. Right now we have the following pages setup with landing page, signup and login modals, questionnaire page, restaurant detail page, settings and a profile page. We don't have the API setup yet, so we are mostly working on frontend while also testing the Yelp API to see what kind of data we can get from it. We also decided on our name as Foodify!

### Tuesday 12/20/22

We continued working on our wireframe today. We are learning more about the capabilities of Figma which is exciting but also slowing us down a little to keep things organized. It is looking great right now with the color theme as well as some of the other features.

### Monday 12/19/22

We worked on a backend design with Excalidraw. This is a bit challenging to do right now without FastAPI, but we are trying to get a general idea of our project. We also started our wireframe with Figma! This is a new tool to me, but has so much functionality!
