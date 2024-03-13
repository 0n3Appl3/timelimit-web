# TimeLimit Website
This is the front and back-end component of the TimeLimit project. All game data is stored in a database and can be accessed through the TimeLimit website, which displays the most recent game.

## Front-end Setup
1. Execute the command `npm run build`.
2. Copy the contents inside the dist folder.
3. Paste inside **/var/www/html** or similar directory.
4. Assuming the web server is configured correctly, view the website and changes should be applied. If not, restart the web server. For example using Nginx, execute the command `sudo systemctl restart nginx`.

## Back-end Setup
1. Copy the contents of the backend folder.
2. Paste in the desired directory.
3. Edit the .env file and configure the database connection.