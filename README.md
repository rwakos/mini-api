# mini-api
I made this repo with the purpose of having the initial shell of a very small api in Nodejs, Express and Typescript, and a Dockerfile to be able to run it on any environment using Docker

The architectural idea is to have a layered design and handle everything separated, which will also help with the escalability, and testing strategy that you choose afterwards.

## Why

When I am doing a fullstack project, I always require an API, and in most of the cases it always starts with a small endpoint, that in time grows and it is very important to have a solid structure that can scale with it, without too much hasle... 

### what I learned in time

Whenever I need to build an API, I always try to be as much as minimalistic as I can, "less is more" type of thing, and for this example, I am choosing Nodejs with Typescript (that will be transpiled to Javascript), and for the server I will use Express JS, which is a very small framework that works very good with a very few lines of code.

### Folder structure
|-> handlers
|-> middlewares
|-> routes
|-> dist *This is where the project will be transpiled to JS
server.ts


"cors": "^2.8.5",
    "dotenv": "^17.0.1",
    "express": "^5.1.0",
    "http-status-codes": "^2.3.0",
    "morgan": "^1.10.0",
    "nodemon": "^3.1.10"


