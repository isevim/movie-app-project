--- Movie App Project ---
This is a simple movie listing application built with React, Redux, and Material-UI. The app fetches movie data from the OMDb API, allowing users to search for movies and view detailed information about each film.

--- Features ---
Search for movies using a search bar.
View a list of movies with details such as title, year, and poster.
Click on a movie to view its details, including plot, cast, and ratings.
Pagination for movie results.

--- Technologies Used ---
React: Front-end library for building user interfaces.
Redux: State management library for managing application state.
Material-UI: React UI framework that provides pre-designed components.
Axios: Promise-based HTTP client for making API requests.
OMDb API: A web service for obtaining movie information.  

--- Getting Started ---
Prerequisites
Node.js and npm (or Yarn) installed on your machine.
An OMDb API key (You can get one here https://www.omdbapi.com/).

1- Clone the repository:

git clone https://github.com/yourusername/movie-app-project.git
cd movie-app-project

2- Install the dependencies:

npm install
# or
yarn install

3- Create a .env file in the root directory of the project and add your OMDb API key:
REACT_APP_OMDB_API_KEY=your_api_key

4- Start the development server:

npm start
# or
yarn start

5- Open your browser and go to http://localhost:3000 to view the application.

--- Usage ---

1- Use the search bar at the top of the page to search for movies.
2- Click on a movie row to view its detailed information.
3- Use pagination controls to navigate through the list of movies.
