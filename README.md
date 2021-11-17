# Netelix - a Netflix clone with Content Management Interface

This is a Netflix clone that gives access to movies and tv series. There 2 types of users: Admin and User. The data is connected to Firebase Database (Cloud Firestore). The Admin role can edit movies and can add a new movie. Soon you will be able to add tv-series too (work in progress).

## How to use it 

When you start the app, the first page you are going to see is the Login page. On the login page you can click Sign Up Now and create a new account. Once you register - you can login with your credentials.

The User's Home page showcases the videos. Each video is clickable and when you click it, a pop-up window will appear which has an information and a video. The Movies, or TV Shows buttons on the navigation bar will scroll the page to those sections. The Sign out button will log you out.

Each tv-series consists of a list of episodes, they can be found in the pop-up window.

The admin status can be assigned by changing isAdmin from false to true via firebase (you can also login with email: admin@gmail.com password: 12345678). The admin's page shows existing movies and when you click on any video it will open a new page with the particular video's information inside the form which you can edit and save. You can add a movie by clicking Add Movie on the home page.

## How to start 

You need to have npm installed on your computer. In the project terminal first run:

### `npm install`

It would compile the project before you would run it. After this go to the next step:

### `npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

## Link

The app is hosted on: https://netelixclone.web.app
