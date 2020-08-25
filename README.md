# acm-kahoot
ACM Kahoot! Made by Side-Projects Blue Team!

### Testing:

To test the project clone and cd into it. Open two command prompts and run mongo in one and mongod in the other.
Type show dbs in the terminal running monogo to see the current data being stored.

## Testing rooms:

Now run npm start in the main directory and this will log where the server is being run at. 
You can connect to the server by typing where it is being run into the browser.
Next you can type a username and id to join a specific room. In a new tab you can connect different users by again typing localhost and you can test rooms in this way.

## Testing database:

In order to input test values for the DB use postman and copy and paste the examples in the [yaml file](https://github.com/acmucsd/acm-kahoot/blob/backend/backend/Docs.yaml),
if you copy and paste the yaml file into [swagger](editor.swagger.io)
you can view the API docs.

Now input some command into postman and you can see the changes in the command prompt running mongo by typing show dbs and saying "use questionDB" (if it is present 
[should be present after doing a post request]). Now you can type show collections and db.questions.find().pretty() to view questions and
db.packs.find().pretty to view packs.
