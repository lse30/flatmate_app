# MSQL Docker container

This folder containers a dockerfile for building a mysql container that is prepopulated with data for the app.

The container is meant to be used for local development

The dockerfile can be found at `./Dockerfile`

## Running locally

- Navigate to the database folder ```cd /database```
- Build the container ```docker build -t dev/mysql .```
- Run the container ```docker run -d -p 3306:3306 dev/mysql```

The container should now be running locally, with port 3306 exposed.

# Configuration
The root user is currently set up with a password of `root`


# Viewing logs 
- Get the container id ```docker ps```
- run ```docker logs -f {CONTAINER ID}```


