This Project is still In development pharse.
Currently The Profile End point has been made.
The JWT token is stored as a cookie and Auth everytime useing middleware.

for testing
-Have mongoDB database running

Routes
get  /  for basic index

post /auth/register (takes username password also email)
post /auth/login (takes username password And genarates Token)

get  /protected/profile (Need to pass Token in head if used in Postman)

Using postman (steps)
in auth.js file Comment the code from line 46 to 50 and Uncomment line 51.
in authMiddle.js Comment the line 6 code and uncomment line 7 code.

Will be developing All the end points in the todo file.