# Cedur Client Assistant Chatbot

This is a static browser-based decision-tree chatbot assistant for Cedur HR and Payroll users. It helps clients troubleshoot common workflows such as payroll processing, attendance marking, employee management, leave balance, settings, and support tickets.

## How To Run

1. Open the project folder.
2. Double-click `index.html`.
3. The chatbot will open in your browser.

No installation, server, database, or API key is required.

## Files

- `index.html` - Main chatbot page structure.
- `styles.css` - Visual design and responsive layout.
- `app.js` - Saved questions, answers, email fallback, and chatbot behavior.
- `README.md` - Quick setup instructions.
- `PROJECT_DOCUMENTATION.md` - Detailed project documentation.

## How It Works

The chatbot shows saved issue categories such as Payroll, Attendance, People, Leave, Settings, and Support. Users can click an issue to follow a step-by-step decision tree.

If the user exhausts all troubleshooting options, or types a question that is not covered by the decision tree list, the chatbot shows an `Email Cedur` button. This opens a prefilled email to:

`info@cedurnow.com`

## Sharing The Project

To send this project to someone else:

1. Send the complete project folder.
2. Make sure the folder includes `index.html`, `styles.css`, `app.js`, `README.md`, and `PROJECT_DOCUMENTATION.md`.
3. The receiver can open `index.html` directly in any modern browser.

## Customizing Saved Questions

Open `app.js` and edit the `decisionTrees` array. Each tree has:

- `label` - Button text shown to the user.
- `prompt` - Message sent to the chatbot when clicked.
- `keywords` - Words used to match typed questions.
- `nodes` - Step-by-step troubleshooting questions and options.

## Support Email

The fallback email address is set in `app.js`:

```js
const supportEmail = "info@cedurnow.com";
```

Change this value if Cedur wants to use another support inbox.
