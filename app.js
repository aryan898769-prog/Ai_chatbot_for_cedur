const chatMessages = document.querySelector("#chatMessages");
const chatForm = document.querySelector("#chatForm");
const messageInput = document.querySelector("#messageInput");
const moduleMap = document.querySelector("#moduleMap");
const questionCategories = document.querySelector("#questionCategories");
const savedQuestionsContainer = document.querySelector("#savedQuestions");

const supportEmail = "info@cedurnow.com";

const decisionTrees = [
  {
    id: "payroll-generate",
    category: "Payroll",
    label: "I am not able to generate payroll",
    prompt: "I am not able to generate payroll",
    keywords: ["not able to generate payroll", "payroll not generating", "cannot generate payroll", "process payroll issue", "run payroll issue"],
    start: "payroll-start",
    nodes: {
      "payroll-start": {
        text:
          "Let's check the common payroll blockers first.\n\nQuestion: Is attendance marked properly for the payroll month?",
        options: [
          { label: "Attendance is marked", next: "payroll-attendance-ok" },
          { label: "Attendance is not marked", next: "attendance-start" },
          { label: "I am not sure", next: "attendance-review" }
        ]
      },
      "payroll-attendance-ok": {
        text:
          "Good. Next check employee and salary setup.\n\nGo to People > People List and confirm employees are Active. Then go to People > Salary and confirm salary/CTC is configured for the payroll month.",
        options: [
          { label: "Employee and salary are correct", next: "payroll-month-version" },
          { label: "Salary is missing or wrong", next: "salary-start" },
          { label: "Employee is inactive/missing", next: "employee-start" }
        ]
      },
      "payroll-month-version": {
        text:
          "Now open Payroll > Generate Payroll.\n\nCheck that the correct month and payroll version are selected. Review the Employee Attendance Summary before clicking Process Payroll.",
        options: [
          { label: "Payroll generated now", next: "resolved" },
          { label: "Button still not working", next: "payroll-final-checks" },
          { label: "Attendance summary looks wrong", next: "attendance-review" }
        ]
      },
      "payroll-final-checks": {
        text:
          "Final checks:\n1. Refresh the page and login again.\n2. Confirm all employees have salary setup.\n3. Confirm attendance and leave data are available for the selected month.\n4. Check Payroll > View Payroll to see whether payroll was already created.",
        options: [
          { label: "Solved", next: "resolved" },
          { label: "Still not solved", next: "email-support" }
        ]
      }
    }
  },
  {
    id: "attendance-mark",
    category: "Attendance",
    label: "I am not able to mark attendance",
    prompt: "I am not able to mark attendance",
    keywords: ["not able to mark attendance", "cannot mark attendance", "attendance not marking", "clock in not working", "mark attendance issue"],
    start: "attendance-start",
    nodes: {
      "attendance-start": {
        text:
          "Let's troubleshoot attendance.\n\nFirst check: is browser location access allowed for Cedur?",
        options: [
          { label: "Location is allowed", next: "attendance-settings-check" },
          { label: "Location is blocked", next: "attendance-location-blocked" },
          { label: "I do not know", next: "attendance-location-help" }
        ]
      },
      "attendance-location-blocked": {
        text:
          "Allow location access in your browser for Cedur, then try Clock In again.\n\nIf using Chrome/Edge: click the lock or site icon near the address bar, allow Location, then reload Cedur.",
        options: [
          { label: "Location allowed now", next: "attendance-settings-check" },
          { label: "Still blocked", next: "email-support" }
        ]
      },
      "attendance-location-help": {
        text:
          "When Cedur shows Location Required, the browser needs permission to share location. Also make sure device location is enabled in Windows/mobile settings.",
        options: [
          { label: "I allowed location", next: "attendance-settings-check" },
          { label: "Still cannot allow", next: "email-support" }
        ]
      },
      "attendance-settings-check": {
        text:
          "Next check the attendance settings.\n\nAdmin path: Settings > Attendance Settings. Confirm clock-in/out time, grace time, office latitude/longitude, and geofence radius are correct.",
        options: [
          { label: "Settings look correct", next: "attendance-mark-page" },
          { label: "Settings are wrong", next: "attendance-fix-settings" },
          { label: "I am not admin", next: "email-support" }
        ]
      },
      "attendance-fix-settings": {
        text:
          "Update Settings > Attendance Settings, save the changes, then reload Cedur and try attendance again.",
        options: [
          { label: "Attendance works now", next: "resolved" },
          { label: "Still not working", next: "attendance-mark-page" }
        ]
      },
      "attendance-mark-page": {
        text:
          "Open Attendance > Mark Attendance.\n\nFor manual attendance, choose From/To dates, fill In Time and Out Time, then Submit. For daily clock-in, use Clock In after location permission is allowed.",
        options: [
          { label: "Attendance marked now", next: "resolved" },
          { label: "Still not marking", next: "email-support" },
          { label: "Need to review records", next: "attendance-review" }
        ]
      }
    }
  },
  {
    id: "attendance-review",
    category: "Attendance",
    label: "Attendance records look wrong",
    prompt: "Attendance records look wrong",
    keywords: ["attendance records wrong", "attendance wrong", "pending attendance", "absent wrong", "half day wrong", "present wrong"],
    start: "attendance-review",
    nodes: {
      "attendance-review": {
        text:
          "Open Attendance > View Attendance.\n\nUse From/To filters and Search. Check Present, Absent, Half Day, On Leave, Paid Leave, and Pending counts.",
        options: [
          { label: "Pending records found", next: "attendance-pending" },
          { label: "Wrong absent/half day", next: "attendance-correct-manual" },
          { label: "Records look correct", next: "payroll-month-version" }
        ]
      },
      "attendance-pending": {
        text:
          "Pending records should be corrected before payroll. Open Attendance > Mark Attendance and fill missing In Time/Out Time where needed.",
        options: [
          { label: "Corrected attendance", next: "payroll-month-version" },
          { label: "Unable to correct", next: "email-support" }
        ]
      },
      "attendance-correct-manual": {
        text:
          "Wrong absent or half-day values usually come from missing clock-in/out, leave status, weekly holiday settings, or payroll month filters.",
        options: [
          { label: "Check leave status", next: "leave-start" },
          { label: "Check weekly holidays", next: "holiday-start" },
          { label: "Still wrong", next: "email-support" }
        ]
      }
    }
  },
  {
    id: "employee-setup",
    category: "People",
    label: "Employee is missing or inactive",
    prompt: "Employee is missing or inactive",
    keywords: ["employee missing", "inactive employee", "add employee", "import employee", "employee not showing"],
    start: "employee-start",
    nodes: {
      "employee-start": {
        text:
          "Open People > People List.\n\nSearch by name, code, email, or designation. Confirm the employee exists and Status is Active.",
        options: [
          { label: "Employee exists and active", next: "salary-start" },
          { label: "Employee missing", next: "employee-add" },
          { label: "Employee inactive", next: "employee-action" }
        ]
      },
      "employee-add": {
        text:
          "Use People > People List > Add Employee for one employee, or Import Employee for bulk upload. After adding, confirm salary setup before payroll.",
        options: [
          { label: "Employee added", next: "salary-start" },
          { label: "Unable to add", next: "email-support" }
        ]
      },
      "employee-action": {
        text:
          "Use the row Actions in People > People List to review or update employee status/access. Only active employees should be considered for payroll.",
        options: [
          { label: "Status fixed", next: "salary-start" },
          { label: "Unable to fix", next: "email-support" }
        ]
      }
    }
  },
  {
    id: "salary-setup",
    category: "People",
    label: "Salary or CTC is wrong",
    prompt: "Salary or CTC is wrong",
    keywords: ["salary wrong", "ctc wrong", "salary missing", "basic pay wrong", "salary setup"],
    start: "salary-start",
    nodes: {
      "salary-start": {
        text:
          "Open People > Salary.\n\nCheck Employee ID, designation, monthly Basic Pay, yearly CTC, and Version Month.",
        options: [
          { label: "Salary data is correct", next: "payroll-month-version" },
          { label: "Salary data is wrong", next: "salary-action" },
          { label: "Employee not listed", next: "employee-start" }
        ]
      },
      "salary-action": {
        text:
          "Use the row action for the employee to review or update salary details. Confirm the salary version applies to the payroll month.",
        options: [
          { label: "Salary fixed", next: "payroll-month-version" },
          { label: "Unable to fix salary", next: "email-support" }
        ]
      }
    }
  },
  {
    id: "leave-issue",
    category: "Leave",
    label: "Leave balance or leave application is wrong",
    prompt: "Leave balance or leave application is wrong",
    keywords: ["leave balance wrong", "leave application wrong", "leave not approved", "leave issue", "remaining leave wrong"],
    start: "leave-start",
    nodes: {
      "leave-start": {
        text:
          "Open Leaves & Holidays > Leave Applications.\n\nCheck leave type, subject, date range, applied by, applied date, and approval status.",
        options: [
          { label: "Leave is approved", next: "leave-balance-check" },
          { label: "Leave is pending/wrong", next: "leave-action" },
          { label: "Need to apply leave", next: "leave-apply" }
        ]
      },
      "leave-action": {
        text:
          "Use the row action in Leave Applications to review the leave request. Payroll should be processed only after leave status is correct.",
        options: [
          { label: "Leave fixed", next: "attendance-review" },
          { label: "Unable to fix leave", next: "email-support" }
        ]
      },
      "leave-apply": {
        text:
          "Use Leaves & Holidays > Leave Applications > Apply For Leave. After approval, verify Attendance > View Attendance and Leave Balance.",
        options: [
          { label: "Leave applied", next: "leave-balance-check" },
          { label: "Unable to apply", next: "email-support" }
        ]
      },
      "leave-balance-check": {
        text:
          "Open Leaves & Holidays > Leave Balance.\n\nCheck employee code, leave type, total leave, and remaining leave.",
        options: [
          { label: "Leave balance correct", next: "payroll-month-version" },
          { label: "Leave balance wrong", next: "email-support" }
        ]
      }
    }
  },
  {
    id: "holiday-issue",
    category: "Leave",
    label: "Weekly holiday is wrong",
    prompt: "Weekly holiday is wrong",
    keywords: ["weekly holiday wrong", "holiday wrong", "add holiday", "weekly off"],
    start: "holiday-start",
    nodes: {
      "holiday-start": {
        text:
          "Open Leaves & Holidays > Weekly Holidays.\n\nConfirm the weekly holiday day is active and correct for the company policy.",
        options: [
          { label: "Holiday is correct", next: "attendance-review" },
          { label: "Need to add/update holiday", next: "holiday-action" }
        ]
      },
      "holiday-action": {
        text:
          "Use Add Holiday or row Actions to update weekly holidays. Then review Attendance > View Attendance again.",
        options: [
          { label: "Holiday fixed", next: "attendance-review" },
          { label: "Unable to fix", next: "email-support" }
        ]
      }
    }
  },
  {
    id: "tax-tds",
    category: "Payroll",
    label: "TDS or tax declaration looks wrong",
    prompt: "TDS or tax declaration looks wrong",
    keywords: ["tds wrong", "tax wrong", "tax declaration issue", "investment wrong", "rent wrong", "hra wrong"],
    start: "tax-start",
    nodes: {
      "tax-start": {
        text:
          "Open People > Tax Declarations.\n\nCheck the current financial year, Prior Employment Financials, Investments & Healthcare, and Rent & Housing.",
        options: [
          { label: "Declaration data is correct", next: "tax-payroll-check" },
          { label: "Declaration data missing/wrong", next: "tax-action" }
        ]
      },
      "tax-action": {
        text:
          "Use the employee row action to review tax declaration details. Correct declarations before payroll so TDS is calculated properly.",
        options: [
          { label: "Tax data fixed", next: "tax-payroll-check" },
          { label: "Unable to fix", next: "email-support" }
        ]
      },
      "tax-payroll-check": {
        text:
          "Now check Payroll > View Payroll for Total TDS, EPF, and ESI. If values still look wrong after correct declarations, contact Cedur.",
        options: [
          { label: "Solved", next: "resolved" },
          { label: "Still wrong", next: "email-support" }
        ]
      }
    }
  },
  {
    id: "salary-advance",
    category: "Payroll",
    label: "Salary advance or loan issue",
    prompt: "Salary advance or loan issue",
    keywords: ["salary advance issue", "loan issue", "emi wrong", "advance not showing", "apply for loan"],
    start: "advance-start",
    nodes: {
      "advance-start": {
        text:
          "Open Salary Advances.\n\nCheck employee, loan amount, tenure, EMI amount, remaining balance, start month, and status.",
        options: [
          { label: "Advance is pending", next: "advance-pending" },
          { label: "EMI or amount wrong", next: "advance-settings" },
          { label: "Need to apply loan", next: "advance-apply" }
        ]
      },
      "advance-pending": {
        text:
          "Pending advances may need admin approval/action. Use the row Actions to review the advance request.",
        options: [
          { label: "Reviewed and fixed", next: "resolved" },
          { label: "Still pending", next: "email-support" }
        ]
      },
      "advance-settings": {
        text:
          "Admin path: Settings > Salary Advance Settings. Check maximum loan amount, maximum tenure, interest rate, and EMI preview.",
        options: [
          { label: "Policy fixed", next: "advance-start" },
          { label: "Unable to fix", next: "email-support" }
        ]
      },
      "advance-apply": {
        text:
          "Open Salary Advances and click Apply For Loan. Then track the request status in the Salary Advances table.",
        options: [
          { label: "Applied successfully", next: "resolved" },
          { label: "Unable to apply", next: "email-support" }
        ]
      }
    }
  },
  {
    id: "roles-access",
    category: "Settings",
    label: "User cannot access a module",
    prompt: "User cannot access a module",
    keywords: ["cannot access module", "permission issue", "role issue", "access denied", "module not visible"],
    start: "roles-start",
    nodes: {
      "roles-start": {
        text:
          "Open Settings > Roles & Permissions.\n\nCheck the user's assigned role and whether that role has permission for the required module.",
        options: [
          { label: "Permission missing", next: "roles-action" },
          { label: "Permission already enabled", next: "roles-refresh" },
          { label: "I am not admin", next: "email-support" }
        ]
      },
      "roles-action": {
        text:
          "Update the role permission or create a role with the required feature access. Ask the user to log out and log in again after changes.",
        options: [
          { label: "Access works now", next: "resolved" },
          { label: "Still no access", next: "email-support" }
        ]
      },
      "roles-refresh": {
        text:
          "Ask the user to refresh Cedur, log out, and log in again. Also confirm the user is assigned to the expected company account.",
        options: [
          { label: "Access works now", next: "resolved" },
          { label: "Still no access", next: "email-support" }
        ]
      }
    }
  },
  {
    id: "support-ticket",
    category: "Support",
    label: "I need to create a support ticket",
    prompt: "I need to create a support ticket",
    keywords: ["create ticket", "support ticket", "raise issue", "contact support"],
    start: "support-start",
    nodes: {
      "support-start": {
        text:
          "Open Tickets and click Create Ticket.\n\nInclude the module name, employee/month if relevant, issue summary, screenshot, and expected result.",
        options: [
          { label: "Ticket created", next: "resolved" },
          { label: "Cannot create ticket", next: "email-support" },
          { label: "Email Cedur instead", next: "email-support" }
        ]
      }
    }
  }
];

const sharedNodes = {
  resolved: {
    text:
      "Great. The issue is resolved. You can continue working in Cedur. If it happens again, repeat the same checks from this decision tree.",
    options: [{ label: "Start another issue", action: "restart" }]
  },
  "email-support": {
    text:
      "All guided checks are exhausted. Please email Cedur support with the issue details, module name, company name, employee/month if relevant, and screenshot.",
    email: true,
    options: [{ label: "Start another issue", action: "restart" }]
  }
};

const modules = [
  {
    name: "Dashboard",
    summary: "Payroll summary, active employees, clock-in count, TDS, PF, deduction breakdown, and recent attendance.",
    keywords: ["dashboard", "home", "summary", "overview"]
  },
  {
    name: "People",
    summary: "Employee list, add/import employee, salary, tax declarations, and benefits.",
    keywords: ["people", "employee", "employees", "staff"]
  },
  {
    name: "Attendance",
    summary: "Mark attendance, view attendance, status counters, in/out time, late, overtime, photos, and location.",
    keywords: ["attendance", "clock", "present", "absent"]
  },
  {
    name: "Payroll",
    summary: "Generate payroll, select month/version, review attendance summary, and view payroll records.",
    keywords: ["payroll", "salary process", "net pay"]
  },
  {
    name: "Leaves & Holidays",
    summary: "Paid leaves, weekly holidays, leave applications, and employee leave balance.",
    keywords: ["leave", "holiday", "weekly off"]
  },
  {
    name: "Salary Advances",
    summary: "Loan amount, tenure, EMI, remaining balance, start month, policy, and status.",
    keywords: ["advance", "loan", "emi"]
  },
  {
    name: "Settings",
    summary: "Change password, attendance settings, salary advance settings, roles, and permissions.",
    keywords: ["settings", "roles", "permissions"]
  },
  {
    name: "Tickets",
    summary: "Create and track support tickets with subject, status, date, attachment, and action controls.",
    keywords: ["ticket", "support", "help"]
  }
];

let activeTree = null;
let activeIssue = "";

function addMessage(sender, text) {
  const message = document.createElement("article");
  const label = document.createElement("strong");

  message.className = `message ${sender}`;
  label.textContent = sender === "bot" ? "Cedur Guide" : "You";
  message.append(label, document.createTextNode(text));
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return message;
}

function createEmailLink(issue) {
  const body = [
    "Hello Cedur Team,",
    "",
    "I need help with this issue:",
    issue || "Issue not specified",
    "",
    "Guided checks already tried:",
    "- Attendance / payroll / settings checks from chatbot decision tree",
    "",
    "Company name:",
    "Module:",
    "Employee/month, if applicable:",
    "Expected result:",
    "Actual result:",
    "Screenshot attached, if available:"
  ].join("\n");

  const link = document.createElement("a");
  link.className = "email-action";
  link.href = `mailto:${supportEmail}?subject=${encodeURIComponent("Cedur support request")}&body=${encodeURIComponent(body)}`;
  link.textContent = "Email Cedur";
  return link;
}

function getNode(tree, nodeId) {
  return tree.nodes[nodeId] || sharedNodes[nodeId];
}

function addDecisionNode(tree, nodeId) {
  const node = getNode(tree, nodeId);
  const message = addMessage("bot", node.text);

  if (node.email) {
    message.append(document.createElement("br"), createEmailLink(activeIssue));
  }

  if (node.options?.length) {
    const options = document.createElement("div");
    options.className = "decision-options";

    node.options.forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = option.label;
      button.addEventListener("click", () => {
        [...options.querySelectorAll("button")].forEach((item) => {
          item.disabled = true;
        });

        addMessage("user", option.label);

        if (option.action === "restart") {
          activeTree = null;
          activeIssue = "";
          addMessage("bot", "Choose another decision-tree question from the category buttons above, or type your Cedur issue.");
          return;
        }

        const nextTree = findTreeByNode(option.next) || tree;
        activeTree = nextTree;
        window.setTimeout(() => addDecisionNode(nextTree, option.next), 160);
      });
      options.appendChild(button);
    });

    message.appendChild(options);
  }
}

function findTreeByNode(nodeId) {
  return decisionTrees.find((tree) => tree.nodes[nodeId]);
}

function startDecisionTree(tree, issue = tree.prompt) {
  activeTree = tree;
  activeIssue = issue;
  addMessage("user", issue);
  window.setTimeout(() => addDecisionNode(tree, tree.start), 160);
}

function findMatchingTree(input) {
  const normalized = input.toLowerCase();
  return decisionTrees.find((tree) =>
    tree.keywords.some((keyword) => normalized.includes(keyword.toLowerCase()))
  );
}

function addEmailFallback(question) {
  const message = addMessage(
    "bot",
    "I do not have a decision tree for this exact question yet. You can email Cedur support directly with the details."
  );
  message.append(document.createElement("br"), createEmailLink(question));
}

function submitPrompt(prompt) {
  const cleanPrompt = prompt.trim();

  if (!cleanPrompt) {
    return;
  }

  const tree = findMatchingTree(cleanPrompt);

  if (tree) {
    startDecisionTree(tree, cleanPrompt);
    return;
  }

  if (cleanPrompt.toLowerCase().includes("hello") || cleanPrompt.toLowerCase().includes("hi")) {
    addMessage("user", cleanPrompt);
    addMessage("bot", "Hello. Choose a decision-tree question above, or type an issue like 'I am not able to generate payroll'.");
    return;
  }

  addMessage("user", cleanPrompt);
  window.setTimeout(() => addEmailFallback(cleanPrompt), 160);
}

function renderSavedQuestions(activeCategory = decisionTrees[0].category) {
  questionCategories.innerHTML = "";
  savedQuestionsContainer.innerHTML = "";

  const categories = [...new Set(decisionTrees.map((tree) => tree.category))];

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = category;
    button.className = category === activeCategory ? "active" : "";
    button.addEventListener("click", () => renderSavedQuestions(category));
    questionCategories.appendChild(button);
  });

  decisionTrees
    .filter((tree) => tree.category === activeCategory)
    .forEach((tree) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = tree.label;
      button.addEventListener("click", () => startDecisionTree(tree));
      savedQuestionsContainer.appendChild(button);
    });
}

function renderModuleMap() {
  modules.forEach((item) => {
    const card = document.createElement("article");
    const button = document.createElement("button");
    const summary = document.createElement("p");

    card.className = "module-card";
    button.type = "button";
    button.textContent = item.name;
    button.addEventListener("click", () => {
      addMessage("user", `Explain ${item.name}`);
      addMessage("bot", item.summary);
    });
    summary.textContent = item.summary;
    card.append(button, summary);
    moduleMap.appendChild(card);
  });
}

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitPrompt(messageInput.value);
  messageInput.value = "";
  messageInput.focus();
});

document.querySelectorAll("[data-prompt]").forEach((button) => {
  button.addEventListener("click", () => submitPrompt(button.dataset.prompt));
});

renderSavedQuestions();
renderModuleMap();
addMessage(
  "bot",
  "Welcome. Choose a decision-tree issue above. I will guide you step by step and show Email Cedur only after the checks are exhausted."
);
