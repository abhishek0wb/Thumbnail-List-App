# [Thumbnail List App](https://thumbnail-list-app.vercel.app/)

Welcome to the Thumbnail Management App! This is a React application that allows users to manage a list of videos, including adding new videos titles and views, editing existing ones, and deleting them. The app provides a user-friendly interface to interact with the list database.

# Features

* **Add Video**: Users can add new videos to the list by providing details such as title, and Views.
* **Edit Video**: Existing videos can be edited, allowing users to update their information.
* **Delete Video**: Videos can be removed from the database if they are no longer needed.
* **Dark/Light Mode**: The app supports both dark and light themes for user preference.


# Usage

* **Adding a Video**: Click on the "Add Video" button and fill in the required details for the new video.
* **Editing a Video**: Click on the "Edit" button next to a video to modify its information.
* **Deleting a Video**: Click on the "Delete" button next to a video to remove it from the database.
* **Switching Themes**: Toggle between dark and light modes using the "Mode" button.

# Technologies Used
* _React_: JavaScript library for building user interfaces.
* _React Context API_: For managing global state (themes and video data).
* _useState_: React hook for managing component-level state.
* _useReducer_: React hook for managing complex state logic.
* _CSS_: Styling the components and layouts.

# File Structure
* _components_/: Contains React components for different parts of the application.
* _context_/: Holds context providers and consumers for managing global state.
* _data_/: Stores sample data for videos.
* _App.js_: Main component where the application is initialized and structured.
