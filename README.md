# Client-Server-Database To-Do List App

## Description

_Duration: 3 day Sprint_

The purpose of the project was to build a to-do list application that utilizes each component of the stack.

The requirements for the project included:
- Creating a front-end experience that allows a user to create a to-do item.
- When a to-do item is created:
    - it is stored inside the database table
    - the DOM is updated and displays the new item
- Each to-do item needs to have a button to 'Complete' or 'Delete' it.
- When a to-do is completed:
    - the isComplete value in the database is updated accordingly
    - a CSS class is applied to the to-do item to differentiate from the other items in the list
- When a to-do item is deleted, it:
    - should be removed from the database table
    - the DOM should update to show that the list no longer includes the deleted to-do item.



<!-- To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com) -->

## Screen Shot

![Alt text](<server/public/To-Do List App_1.png>)



### Prerequisites

- [Node.js](https://nodejs.org/en/)


## Installation

1. Create a database named `weekend-to-do-app`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm install pg` in your terminal
5. Run `npm install express` in your terminal
6. The `npm start` to start your server

## Usage
How does someone use this application? Tell a user story here.

1. Type a to-do item in the text input field, and click on the + button
2. When you complete a task, click on the green check mark
3. This will cross out that task
4. If you want to delete a completed task (or remove a tast for any other reason), simply click the red x


## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Special thanks to Andrew Harasymiw and Beth Tracy.

## Support
If you have suggestions or issues, please email me at [stephick@gmail.com](www.google.com).
