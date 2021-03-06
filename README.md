# Stories
This webapp allows users to write and display stories to publically. Other users can then read these stories, and rate them as well. Node.js, Express, Typescript, and MySQL are used for this project.

## Features
- The homepage will suggest you the top-rated story, and the five most recently updated stories. You can click on their titles or covers to read any of them. You can leave comments or ratings if you are logged in.
- You can log in or register by clicking the link in the navbar to the top right.
- When logged in, you may browse "Your Stories" from the navbar, which also shows a link to create a story.
- Similarly, any mention of an author is linked to the author's profile page. This lists all the stories the author has uploaded.
- Stories can also have book covers, which are shown inside story cards.
- You may change your password or author biography by viewing the settings page. You can also delete your account there.
- If you are logged in while reading a story, you can rate by clicking on the stars below the story. You can also leave comments for the story if you wish.
- Below the rating options is the favouriting option. You can favourite a story by clicking the icon. Any of your favourites will show up on the "Your Favourites" page.

## Running the program
This website relies on a MySQL or MariaDB to host a database entitled "storiesApp". To test this out, SQL must be running, with a username and password entered for an SQL user with permission to create, select, and insert to databases, or at least the database entitled "storiesApp. Ensure that the parameters in "sql/config.json" point to a user who has permissions to create the database.

To initialize the database, you can simply run "npm run initDatabase". If you don't want the sample users and stories in your database, then run this with the command line argument "noSamples", which gives you a completely empty database. If you wish to also create an administrator user who can delete other users, stories, or comments, then run the initDatabase script with the parameter "admin". This will create an admin with login credentials specified in the "sql/adminConfig.json" file.

To run the program, modify the connection parameters in the index.ts file to use the proper host, username, and password. Make sure the PHP server is running, and then you can run "npm start" in the root directory. You can then visit the website at port 3000.