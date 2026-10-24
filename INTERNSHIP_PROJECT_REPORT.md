# Internship Project Report - One Page Summary

Project Name: Cedur Client Decision-Tree Chatbot Assistant  
Intern Name: Aryan Raj  
Reporting Period: 04 May 2026 to 05 July 2026  
Organization: Cedur  
Project Type: HR and Payroll Web Application Support Assistant  

---

## Page 1 - Executive Summary

During my internship period from 04 May 2026 to 05 July 2026, I worked on designing and developing a client-facing chatbot assistant for Cedur's HR and Payroll web application. The main purpose of this project was to help Cedur users quickly understand how to use important modules such as Payroll, Attendance, People, Leave, Salary Advances, Settings, and Support Tickets.

The project started as a simple payroll chatbot idea, but gradually evolved into a more practical decision-tree based assistant. Instead of only giving general answers, the chatbot now guides users step by step through common problems. For example, if a client says, "I am not able to generate payroll," the chatbot does not immediately ask them to contact support. It first asks whether attendance has been marked correctly, then guides them to check employee status, salary setup, payroll month, payroll version, and attendance summary. Only after the major checks are exhausted does it suggest emailing Cedur support.

This approach makes the chatbot more useful for real users because most software problems are not solved by one-line answers. Users often need guided troubleshooting. The assistant was therefore designed to behave more like a support representative who asks the right questions in sequence.

The final deliverable is a static web-based chatbot project that can run on any computer by opening the `index.html` file. It does not require a backend server, database, API key, or installation. This makes it easy to share with Cedur team members, mentors, or evaluators. The final project folder includes all required files: `index.html`, `styles.css`, `app.js`, `README.md`, `PROJECT_DOCUMENTATION.md`, and this internship report.

In addition to development work, I also studied Cedur's actual web application flow by logging in, observing the user interface, and understanding how different modules connect with each other. This helped me write responses and decision trees that are more realistic and relevant to Cedur's product.

Overall, this project helped create a support layer for Cedur users and gave me practical exposure to frontend development, product understanding, user support flows, documentation, and real-world HR/payroll software behavior.

---

## Page 2 - 1. Project Objective

The objective of this project was to solve a common problem faced by users of business software: they often do not know where to go inside the application when something does not work as expected.

Cedur is an HR and Payroll web application with multiple important modules. A user may need to process payroll, mark attendance, view attendance records, check employee salary, approve leave, review tax declarations, configure attendance settings, manage salary advances, or create support tickets. For a new user, these workflows can feel confusing, especially when payroll depends on many connected items such as employee status, salary setup, attendance, leave, holidays, and payroll month.

The main problem this project intended to solve was:

"How can Cedur guide clients through common product issues before they need to contact support?"

The project was not only about creating a chatbot interface. The deeper objective was to create a guided support experience. A normal FAQ system gives direct answers, but a decision-tree assistant asks questions in a logical order and helps the user reach the correct next step.

For example, if payroll is not generating, there can be many possible reasons:

- Attendance may not be marked properly.
- Leave status may be pending or incorrect.
- Employee may be inactive or missing.
- Salary or CTC may not be configured.
- Payroll month or version may be selected incorrectly.
- The payroll may already exist in View Payroll.
- The user may not have permission to access the required module.

Instead of sending all users directly to support, the chatbot helps them check these possibilities one by one.

The goal was also to make the project easy to run and share. Therefore, the chatbot was developed as a static frontend project using HTML, CSS, and JavaScript. Anyone can open it in a browser without installing software or starting a server.

Another objective was to make the chatbot sound human and client-friendly. The tone of the assistant was designed to be simple, calm, and practical. It avoids overly technical language and instead explains where to go inside Cedur and what to check next.

In short, the project objective was to improve client self-service, reduce repeated support queries, and provide a structured troubleshooting experience for Cedur's HR and payroll workflows.

---

## Page 3 - 2. Work Completed

During the internship, I completed several stages of work, starting from understanding the requirement and ending with a shareable decision-tree chatbot project.

The first major task was understanding the purpose of the chatbot. Initially, the requirement was to build a chatbot for a payroll system application. After discussing the need further, the scope became more specific: the chatbot should be created for Cedur's payroll web application and should help real clients use the system.

The second task was studying Cedur's website and product positioning. This helped me understand that Cedur is focused on HR, payroll, attendance, leave, salary advances, compliance, employee records, and support for Indian SMEs and startups.

The third task was accessing the Cedur application using the provided login account. I inspected the actual application screens and understood the major modules. The explored modules included:

- Dashboard
- People
- People List
- Salary
- Tax Declarations
- Benefits
- Attendance
- Mark Attendance
- View Attendance
- Payroll
- Generate Payroll
- View Payroll
- Leaves and Holidays
- Paid Leaves
- Weekly Holidays
- Leave Applications
- Leave Balance
- Salary Advances
- Settings
- Change Password
- Attendance Settings
- Salary Advance Settings
- Roles and Permissions
- Tickets
- Archives

The fourth task was creating the first version of the chatbot. This version included general saved questions and answers related to Cedur modules. It helped users find paths such as Payroll > Generate Payroll or Attendance > Mark Attendance.

The fifth task was improving the chatbot into a saved-question support assistant. It included category buttons such as Payroll, Attendance, People, Leave, Settings, and Support. If a user's question was not found, the assistant showed an option to email Cedur support.

The sixth and most important task was converting the chatbot into a decision-tree assistant. This made the assistant more realistic and useful. The final chatbot now handles issue flows such as:

- I am not able to generate payroll.
- I am not able to mark attendance.
- Attendance records look wrong.
- Employee is missing or inactive.
- Salary or CTC is wrong.
- Leave balance or leave application is wrong.
- Weekly holiday is wrong.
- TDS or tax declaration looks wrong.
- Salary advance or loan issue.
- User cannot access a module.
- I need to create a support ticket.

The seventh task was preparing the project for sharing. I created documentation files so that another person can understand and run the project easily. The final project was also copied to a direct C drive folder:

`C:\Cedur-Client-Assistant`

The final deliverables produced were:

- `index.html`
- `styles.css`
- `app.js`
- `README.md`
- `PROJECT_DOCUMENTATION.md`
- `INTERNSHIP_PROJECT_REPORT.md`

---

## Page 4 - 3. Key Outcomes

The project achieved a working chatbot assistant that is practical, easy to use, and directly related to Cedur's HR and Payroll application.

One of the most important outcomes is that the chatbot now follows a decision-tree format. This means users are not only shown answers, but are guided through step-by-step troubleshooting. This is much closer to how a support team member would actually help a client.

For example, when the user says they cannot generate payroll, the assistant checks:

1. Whether attendance is marked properly.
2. Whether attendance records are pending or incorrect.
3. Whether employee status is active.
4. Whether salary or CTC is configured.
5. Whether the correct payroll month and version are selected.
6. Whether payroll already exists in View Payroll.
7. Whether the issue still needs Cedur support.

This reduces confusion and gives the user clear next actions.

Another key outcome is that the chatbot covers many Cedur modules, not only payroll. The assistant can guide users through attendance, leave, salary, tax declarations, settings, access permissions, salary advances, and support tickets. This makes it more useful as a general Cedur help assistant.

A measurable outcome is the number of guided issue flows created. The final chatbot includes 11 major decision-tree issue flows. Each flow contains multiple steps and options, making the assistant capable of handling many common support situations.

The project also achieved portability. The chatbot can be shared as a folder and run on another computer without installation. This is useful for review, demonstration, and future development.

The final folder contains only simple web files, which makes it easy for another developer or Cedur team member to understand. The `README.md` explains how to run the project, while `PROJECT_DOCUMENTATION.md` explains the purpose, features, structure, and future improvements.

Another important outcome is that unknown or unresolved issues are not ignored. When the decision tree is exhausted, the chatbot gives an option to email Cedur support. The email is prefilled with useful fields such as company name, module, employee or month, expected result, actual result, and screenshot reminder. This can help the support team receive better-quality issue reports.

The project also improved the user experience by presenting saved issue categories. Users do not need to type everything from memory. They can choose from categories like Payroll, Attendance, People, Leave, Settings, and Support.

Overall, the key outcome is a working support assistant that can reduce repeated basic queries, improve user guidance, and create a foundation for a future AI-powered or backend-integrated support system.

---

## Page 5 - 4. Challenges and Solutions

Several challenges came up during the project. The first challenge was understanding the real Cedur application flow. A payroll system is not a single-screen application. Payroll depends on employees, salaries, attendance, leaves, holidays, tax declarations, and settings. To solve this, I explored the actual Cedur web application and studied the visible modules and screen flows.

The second challenge was deciding what kind of chatbot would be most useful. A simple chatbot with fixed answers was easy to build, but it was not enough for real client problems. For example, if a user cannot generate payroll, there are many possible reasons. A single answer would not solve the issue properly. The solution was to convert the assistant into a decision-tree format where the bot asks follow-up questions and gives the next step based on the user's response.

The third challenge was making the chatbot human-friendly. Users of HR and payroll software may not be technical. If the assistant uses too much technical language, it becomes difficult to understand. To solve this, the chatbot language was written in a simple and practical way, using phrases like "Open Payroll > Generate Payroll" and "Check whether attendance is marked properly."

The fourth challenge was creating a fallback for unresolved issues. Not every issue can be solved by a static chatbot. Some problems may require account-level checking by Cedur's team. To solve this, I added an Email Cedur option at the end of exhausted decision trees. This ensures that the user is not left stuck.

The fifth challenge was making the project easy to share. If the project required a server or installation, it would be harder for mentors or team members to run. To solve this, I built the project using plain HTML, CSS, and JavaScript. This makes it fully portable.

The sixth challenge was organizing many questions without making the interface crowded. The solution was to group issues into categories such as Payroll, Attendance, People, Leave, Settings, and Support. This keeps the interface clean and helps users find the relevant issue faster.

The seventh challenge was keeping the code maintainable. Since more decision trees may be added later, the JavaScript was structured around a `decisionTrees` array. This makes it easier to add new issues, new steps, and new options without rewriting the whole application.

Each challenge helped improve the project from a simple chatbot into a more thoughtful product-support tool.

---

## Page 6 - 5. Learnings

This project gave me many technical and business learnings.

From a technical point of view, I improved my understanding of HTML, CSS, and JavaScript. I learned how to structure a complete static web project, connect JavaScript logic to interface elements, create dynamic buttons, handle user input, and update the chat area in real time.

I also learned how decision-tree logic works. A decision tree is different from a normal FAQ. It needs nodes, options, next steps, and end states. In this project, I learned how to represent troubleshooting flows in JavaScript objects and how to move the user from one step to another based on their selected option.

I learned how to create a fallback email system using `mailto:` links. This helped me understand how a static website can still help users contact support without needing a backend.

From a design point of view, I learned that a chatbot should not only look good but should also reduce confusion. Good support design depends on asking the right question at the right time. A user who cannot generate payroll needs a guided path, not just a paragraph of information.

From a business point of view, I learned how HR and payroll systems are connected. Payroll is not isolated. It depends on employee data, salary structure, attendance, leave, holidays, tax declarations, statutory deductions, and user permissions. This gave me a better understanding of how real HR software works.

I also learned the importance of documentation. A project is not complete only when the code works. Other people should be able to understand it, run it, and improve it. That is why I prepared `README.md`, `PROJECT_DOCUMENTATION.md`, and this internship report.

Another learning was about client support. Many client questions are repetitive, and a guided assistant can reduce the support team's workload. However, the assistant should also know when to hand over the issue to humans. This balance is important.

Overall, this project improved my frontend development skills, product understanding, user-support thinking, and documentation ability.

---

## Page 7 - 6. Recommendations / Next Steps

The current chatbot is a strong starting point, but Cedur can improve it further in several ways.

First, Cedur can add more decision trees based on real support tickets. The best source of future chatbot questions will be actual client issues. If Cedur reviews repeated tickets, those can be converted into guided flows inside the chatbot.

Second, Cedur can integrate the chatbot directly into the Cedur web application. Right now, the project is a static standalone assistant. In the future, it can appear inside Cedur as a small help widget on the bottom-right corner, similar to support assistants used by many SaaS products.

Third, Cedur can make the chatbot context-aware. For example, if the user is already on the Payroll page, the chatbot can automatically show payroll-related help. If the user is on Attendance, it can show attendance questions first.

Fourth, Cedur can connect the chatbot with the support ticket system. Instead of opening only an email, the chatbot can automatically create a support ticket with the selected issue path, user details, module name, and screenshot.

Fifth, Cedur can add analytics. The company can track which questions are clicked most often, where users get stuck, and which issues lead to support escalation. This can help improve the product and reduce friction.

Sixth, Cedur can add role-based guidance. A company admin, HR manager, finance team member, and employee may need different answers. The chatbot can ask the user's role and customize the guidance.

Seventh, Cedur can convert this static assistant into an AI-assisted support system in the future. The decision tree should remain as the safe base, while AI can help understand natural language questions and recommend the right flow.

Recommended next steps:

1. Review the current decision trees with Cedur's support team.
2. Add more flows from real client tickets.
3. Test the assistant with 5 to 10 actual users.
4. Improve wording based on user feedback.
5. Integrate the chatbot into Cedur's main application.
6. Connect unresolved issues to Cedur's ticket system.
7. Add analytics to measure usage and improvement.

This project can become an important client-support layer for Cedur if it is improved continuously.

---

## Page 8 - 7. Final Executive Summary

This internship project focused on creating a client-facing decision-tree chatbot assistant for Cedur's HR and Payroll web application. The goal was to help users solve common workflow issues without immediately depending on support.

The project began as a simple payroll chatbot but evolved into a structured support assistant. The final version includes guided troubleshooting flows for payroll generation, attendance marking, attendance errors, employee setup, salary issues, leave problems, weekly holiday issues, tax declaration issues, salary advance issues, access permission issues, and support ticket creation.

The chatbot uses category-based saved issues and step-by-step decision trees. For example, if a client cannot generate payroll, the assistant first asks whether attendance is marked properly, then checks employee status, salary setup, payroll month, payroll version, and other possible blockers. If all options are exhausted, the user is given an Email Cedur button to contact support with proper details.

The final project is built using HTML, CSS, and JavaScript. It is fully portable and can run on any computer by opening `index.html`. No server, installation, database, or API key is required.

The main achievement of the project is that it transforms common support knowledge into a guided self-service experience. This can help Cedur reduce repetitive support queries, improve client onboarding, and guide users more clearly through payroll and HR workflows.

The project also includes proper documentation and can be extended in the future by adding more decision trees, integrating with Cedur's ticket system, and embedding the assistant directly into Cedur's web application.

In conclusion, this internship project helped me gain practical experience in frontend development, product analysis, decision-tree logic, client support design, and documentation. It also produced a useful working prototype that can support Cedur's users and serve as a foundation for future improvements.

