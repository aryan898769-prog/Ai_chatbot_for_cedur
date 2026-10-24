# Project Documentation

## Project Name

Cedur Client Assistant Chatbot

## Purpose

The project provides a client-facing decision-tree chatbot assistant for Cedur HR and Payroll users. It helps users troubleshoot common product questions before contacting support.

The assistant is designed like a support widget with saved issue paths. Users can choose a predefined issue or type their own issue.

## Target Users

- Cedur clients
- Company admins
- HR teams
- Finance teams
- Employees using Cedur for attendance, leave, or support queries

## Main Features

### Decision Tree Categories

The chatbot includes these categories:

- Payroll
- Attendance
- People
- Leave
- Settings
- Support

### Decision Tree Issues

Examples include:

- I am not able to generate payroll
- I am not able to mark attendance
- Attendance records look wrong
- Employee is missing or inactive
- Salary or CTC is wrong
- Leave balance or leave application is wrong
- Weekly holiday is wrong
- TDS or tax declaration looks wrong
- Salary advance or loan issue
- User cannot access a module
- I need to create a support ticket

### Email Fallback

If the user exhausts all guided options, or asks a question that does not match any decision tree, the chatbot shows an `Email Cedur` button. The button opens the user's email client with a prefilled message to Cedur support.

### Module Map

The right panel includes a Cedur module map. It gives quick descriptions of Dashboard, People, Salary, Tax Declarations, Attendance, Payroll, Leaves & Holidays, Salary Advances, Settings, Tickets, and Archives.

## Technology Used

- HTML
- CSS
- JavaScript

No backend is required.

## Folder Structure

```text
cedur-client-assistant/
  index.html
  styles.css
  app.js
  README.md
  PROJECT_DOCUMENTATION.md
```

## Running The Project

Open `index.html` in a browser.

The project works locally because all code is static and all files are linked using relative paths.

## Deployment Options

This project can be shared or deployed in several ways:

- Send the folder as a ZIP file.
- Host it on any static hosting service.
- Embed the interface into another web application after adapting the HTML/CSS/JS.
- Serve it from a normal web server without any backend changes.

## How To Add More Decision Trees

Open `app.js` and find:

```js
const decisionTrees = [
```

Add a new tree object:

```js
{
  id: "unique-id",
  category: "Payroll",
  label: "Issue button text",
  prompt: "Issue sent to chatbot",
  keywords: ["keyword 1", "keyword 2"],
  start: "first-node-id",
  nodes: {
    "first-node-id": {
      text: "Question or instruction shown to user.",
      options: [
        { label: "Option text", next: "next-node-id" }
      ]
    }
  }
}
```

## How To Change Cedur Support Email

Open `app.js` and update:

```js
const supportEmail = "info@cedurnow.com";
```

## Important Notes

- The chatbot does not connect to Cedur's database.
- The chatbot does not change payroll, attendance, or employee records.
- It is a guidance assistant based on decision trees.
- Unknown questions or exhausted paths are routed to Cedur support by email.
