# Journal

## Week 5

### 1/27/2023 Friday DUE DATE DAY!

We got to debut our website to Candice this morning shortly after attendance.\
After lunch, we were informed to check errors in the console on all pages.\
Edited multiple console errors that showed up to the log.\
Couldn't get the key prop error to go away sadly.\
We will ask Candice about this at our next informal code review after grades have posted.

### 1/26/2023 Thursday

Today was the last day to really work on the project.\
We did a lot of design, trial and error. Font changes done by Nat,\
I worked on the design on the Restaurant List page cards.\
Zac and Gina worked on filtering more of the API to show details to restaurants that populte on the list.\
I took the night to test the code and tweak anything that needed to be fixed.\
Sign up and login forms still showed error messages from the browser, I changed the type to text instead of email.\
Had someone else test the sign up function of the site, with some feedback, \
I rerouted the site to go to the homepage from after signing up and after setting the dietary needs and allergies.\
Tried to figure out where the key prop error in the console was, Gina fixed it! I almost had it.\
I learned about key props and their error in the console for sure.\
Took screengrabs of the final product to put into the readme.

### 1/25/2023 Wednesday

Working on UserProfile page to show error messages if a user incorrectly updates their profile for each input.\
Added icons to match allergies and dietary restrictions.\
Added icons and headers to when you create allergies and dietary restrictions after signing in.\
Was a second eye to Nat when trying to update the questionnaire modal and restaurant list.\
Collaborated with overall design to implement with Nat.\
Designed the mainpage even more with carousel background and caption background edit.\
Background was set to moving food, Nat found a plate to come into view and I edited the animation of the plate to spin and come from the top right.\
Nat picked a font and I helped her update the other headings that needed the font.\
Updated other font sizes and spacing.\
Pretty much focused on design today.\
Gina continued to work on filtering through the results.\
I have learned that the Yelp API is picky.\
Added my about blurb in the about section.\
Note to Gina: Clear the stored info at logout. REDUX

### 1/24/2023 Tuesday

Rewatched Riley's lecture on unit testing.\
Wrote a unit test for get an account. Zac steered me in the write direction as to why my tests were failing.\
Added links to each resource along with opening the link to a new page, added alternate captions if images don't populate.\
FINALLY centered the nav PlateMate logo when user is logged out.

### 1/23/2023 Monday

I added the cancel button to the allergies and dietary restrictions portion of the user profile.\
Had do change the functionality of "cancel" in user profile so the cancel button actually cancelled the update if the user changes their mind.\
It was still updating the information when I first added the cancel button.\
Helped Nat on the modal popping out for questionnaire from the original button.\
Added the error when a user comes up with no results after the questionnaire, edited it into a card.\
Working on having a button on the card reroute to the questionnaire again.\
Working on the questionnaire modal to dismiss after it has been submitted.

## Weekend before project due

### 1/21/2023 Saturday & 1/22/2023 Sunday

I started working on putting the questionnaire on a carousel. \
On sunday, I worked on putting that carousel into a modal. \
I added blurred photos (Nat's idea!) to the background of each question in the questionnaire.\
Gina and I learned that the Yelp API breaks on sundays.\
I helped Gina with having the Yelp API work when a user input data to the questionnaire.\
I added a cancel button to the user profile.

## Week 4:

### 1/20/2023 Friday

ANOTHER day with redux, BUT MAKING MORE PROGRESS! \
I am still passenger with Gina / co-piloting through liveshare on VS code. \
We collaborated on the QuestionnaireModal page to show the questions with the desired inputs. \
Downloaded another dependency to work with the multi selection feature on one of the questions on the QuestionnaireModal page.\
We worked together on the functions in the form to get the handle change to work with the multi selection feature. \
Natalie designed the user profile page. She also set the footer to be fixed.\
Zac worked on updating allergies and creating dietary restrictions. \
Jason worked on getting the checkboxes onto the allergies in userprofile

### 1/19/2023 Thursday

Another long day with Redux, and now redux persist. REHYDRATE. \
Gina is making progress with Redux as I passenger with her and try to research everything. \
While also downloading dependencies we way or may not be using. Who knows. \
After feeling like I wasn't getting anywhere, I decided to do the carousel of the mainpage. \
Tweaks need to be made but it is coming together. \
Nat added a loading pizza feature to the sign up form, which helped her figure out her original problem! \
Zac and Jason fixed/completed the update profile form.

### 1/18/2023 Wednesday

Today was a long day with Redux. Definitely marked as a big struggle day for me. \
Worked with Gina on researching about implemening Redux. \
Gina completed logout function. \
Natalie and Zac worked on Nav bar modals.

### 1/17/2023 Tuesday

We had a long merge party in the morning. Luckily all merge conflicts were resolved, but it did take time.\
While merging, we fixed certain front end issues that were occuring when loading the React port.\
I successfully completed the footer today after finding some typos and centering problems.\
Natalie was able to install tailwind-elements into the GHI so we can use more features that we looked to use when we were wireframing.\
Jason and Zac worked on User profile and discovered issues with dietary restrictions and allergies.\
We worked together to figure those issues out.\
Gina got the token to work for logging in.\
Gina and I are learning about Redux Toolkit to implement the functionality of the questionnaire later on.

## Week 3:

### 1/13/2023 Friday

I worked on the footer using Tailwind. I am loving Tailwind.\
The logo routes to the homepage, About routes to the about page, Resources routes to the resources page.\
Each of our icons route to our LinkedIn profiles. The copyright PlateMate text at the bottom of the footer routes to the group repository.

### 1/12/2023 Thursday

Gina & Zac: focused on more backend.\
Marison & Nat: Tailwind, Signup Modal\
Jason: Log in Form

### 1/11/2023 Wednesday

Gina & Zac: authenticated backend. Started error handling for put and delete.\
Marison & Jason: Sign Up Form.\
Nat: Completed Nav.js

### 1/10/2023 Tuesday

Drivers: Zac & Gina.\
Completed CRUD functions of the allergies and dietary restrictions table.\
Changed child tables to unique to match the one-to-one relationship with accounts, allergies, and diet restrict.\
Took off the foreign key in the SQl command for queries.allergies and used just ‘references’ to connect both tables. \
Made some changes to allergies classes.\
Updated allergies and diet restrict table to have ‘ON DELETE CASCADE’ so that deleted accounts will also delete the allergies and diet restrict values.

### 1/9/2023 Monday

Driver: Natalie.\
Added the Update method.\
Was able to make a call to our Yelp API usig the FastApi Swagger UI tool.\
Modified URL with filters for existing Yelp API. \
Created allergies and dietary restrictions tables.\
Worked on creating functions for allergies.

## Week 2:

### 1/6/2023 Friday

Drivers: Marison & Jason.\
Me as the first driver, fixed authenticator.py.\
Jason as driver continued with CRUD functionality.

### 1/5/2023 Thursday

Driver: Marison.\
Learned how to manually put in data through PGAdmin.\
Updated ZipCode to VARCHAR from integer.\
Made additional migration file.\
Created pydantic models for user. UserIn, UserOut, UserQueries.\
CRUD functions were created.\
Watched the Authorization with JWTdown for FastAPI.

### 1/4/2023 Wednesday

Driver: Zac.\
Learned how to make a yaml file from scratch.\
Completed the yaml file as a team, set up and chose Postgres Database.\
I was the person typing to make sure the file was successfuly typed out correctly and able to be cloned by the rest of the group.\
Set up PG Admin successfully.\
Everyone was able to clone the project.\
We created our first table collaboratively.

### 1/3/2023 Tuesday

Driver: Marison.\
Worked on routes of each page.\
Studied/learned Yelp API filters.\
Revised api-design-user.md on gitlab.\
Forked/cloned Project Gamma repository.\
Manually copied files into Platemate project in group repository.

## Week 1:

### 12/22/2022 Thursday

Agreed on a new name and changed the name of the app to "PlateMate".\
I started and completed api-design-user.md in the repository.

### 12/21/2022 Wednesday

Working on completing wireframe design via Figma.\
Had to brainstorm change name of app.

### 12/20/2022 Tuesday

Zac continued backend design in excalidraw.

### 12/19/2022 Monday

Excalidraw backend started by Zac.\
Figma wireframe started. Picked color palette for website through colorhunt.\
Thought of the name "Foodify" and Nat created a logo.
