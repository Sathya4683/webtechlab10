# Web Tech Lab 10

This project is a simple web server built with Node.js that serves two pages: a home page and an about page.

## Directory Structure

-   `index.html`: The home page of the web application.
-   `about.html`: The about page of the web application.
-   `server.js`: The main entry point of the application. It creates the HTTP server and listens for requests.
-   `router.js`: Handles the routing of requests to the appropriate request handler.
-   `requestHandler.js`: Handles the logic for serving the HTML files.
-   `logger.js`: A simple logger module that logs errors to a file named `error.log`.
-   `.gitignore`: A gitignore file to exclude unnecessary files from the git repository.
-   `LICENSE`: The license file for the project.
-   `README.md`: This file.

## How to run the project

1.  Install Node.js on your machine.
2.  Clone this repository.
3.  Open a terminal in the project's root directory.
4.  Run the command `node server.js`.
5.  Open your web browser and navigate to `http://localhost:3000` to view the home page.
6.  Navigate to `http://localhost:3000/about` to view the about page.

## Deployment

  This project has been deployed on vercel (https://webtechlab10.vercel.app/)
