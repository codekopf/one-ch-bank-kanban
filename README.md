# One CH bank Kanban Board

This project was created as side-project based on one task in multi-question entry test for one Swiss bank. As I had no time to fully understand shenanigans of whole project in browser IDE I do not use, I have decided to download it and develop it locally. However, I forgot that after recent clean installation of Windows I did not have installed even node.js, nor NPM.

I did not and still do not consider this task to be appropriate for multi-question test where other task and questions are also involved. So I skipped the question totally. 

After the test was submitted I decided to develop it further and complete it to working MVP. It took me roughly 2 hours to complete it using the classes and structure I considered to be the most appropriate.

Desired functionality:

![alt text](https://github.com/codekopf/one-ch-bank-kanban/blob/main/KanbanBoard.gif?raw=true)

My implementation:

![alt text](https://github.com/codekopf/one-ch-bank-kanban/blob/main/KanbanBoard-codekopf.png?raw=true)

I auto generated the new Angular project with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1 from scratch as the original project has problem with dependancies. After that I replaced necessary files with original ones. 

## Docker

Build docker image with `docker build -t one-ch-bank-kanban:latest .` and then to run application in Docker container use `docker run -p 8080:80 one-ch-bank-kanban:latest`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
