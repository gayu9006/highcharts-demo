# Highcharts Demo — Visitor Analytics Dashboard

An interactive Angular dashboard built with Highcharts to visualize daily and hourly visitor data.  
Users can switch between different chart types (Column, Line, or Pie) and view detailed hourly visitor breakdowns. 

## Features

- Select different days to view visitor statistics  
- Toggle between **Column**, **Line**, and **Pie** charts dynamically  
- Displays hourly visitor breakdown with percentage of total visitors  
- Responsive UI built with **Bootstrap 5**  
- Interactive data visualization powered by **Highcharts**
 

## Tech Stack

- Angular 16+
- TypeScript
- Bootstrap 5
- Highcharts
- SCSS
 
## Installation and Setup Guide

Follow the steps below to set up and run the project locally.

### 1. Clone the repository 
git clone https://github.com/gayu9006/highcharts-demo.git 

### 2. Navigate to the project directory 
cd highcharts-demo 

### 3. Install dependencies  
npm install  

### 4. Run the development server  
ng serve  
Now open your browser and navigate to:  
👉 [http://localhost:4200](http://localhost:4200)

The application will automatically reload if you make any changes to the source files.

## Build for Production
To build the project for production, run:
ng build
The compiled files will be stored in the `dist/` folder.

## Project Structure 
src/
 ├── app/
 │    ├── app.component.ts
 │    ├── app.component.html
 │    ├── app.component.scss
 │    └── app.module.ts
 ├── assets/
 │    └── visitor-data.json
 ├── environments/
 ├── index.html
 └── styles.scss
 

---

## Git Commands (Complete Workflow) 
If you are setting up a new repository or pushing updates, use the following commands:

### Initialize a new repository (if not already done)  
git init
 

### Add all files to staging 
git add .
 

### Commit changes 
git commit -m "Initial commit"
 

### Add the remote repository 
git remote add origin https://github.com/gayu9006/highcharts-demo.git
 

### Push the project to GitHub 
git branch -M main
git push -u origin main
 

### For future updates 
git add .
git commit -m "Updated files"
git push
 

---

## Running Tests 
### Unit Tests
Run unit tests using Karma: 
ng test
 

### End-to-End Tests
To run end-to-end tests: 
ng e2e
 
 
## About 
Developed by **Gayatri Bodake**  
GitHub: [https://github.com/gayu9006](https://github.com/gayu9006)
 

## License 
This project is licensed under the MIT License.
