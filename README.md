
# 💰 Tip Calculator

A simple, responsive, and user-friendly Tip Calculator built using HTML5, CSS3, and JavaScript. It helps users calculate the tip amount, total bill, and per-person contribution quickly and accurately.

## 📌 Project Overview

The Tip Calculator allows users to enter a bill amount, select a tip percentage, and specify the number of people sharing the bill. The application automatically calculates the tip and total amount each person needs to pay.

## 🎯 Objectives

- Practice HTML form inputs and CSS styling.
- Understand JavaScript arithmetic operations.
- Implement real-time calculations using event listeners.
- Apply conditional validation to user inputs.
- Format monetary values to two decimal places.
- Create a responsive and interactive user interface.

## ✨ Features

- **Bill Amount Input:** Enter the total bill amount.
- **Tip Percentage Selection:** Choose 5%, 10%, 15%, or 20%.
- **Custom Tip:** Enter a custom tip percentage.
- **People Counter:** Increase or decrease the number of people.
- **Live Calculations:** Update results whenever inputs change.
- **Tip Amount:** Calculate the tip based on the bill.
- **Total Bill:** Display the bill amount including the tip.
- **Per-Person Split:** Calculate the tip and total payable amount per person.
- **Input Validation:** Handle invalid values and prevent division by zero.
- **Currency Formatting:** Display amounts in Indian Rupees (INR).
- **Reset Option:** Restore the calculator to its default settings.
- **Responsive Design:** Works on desktop, tablet, and mobile screens.
- **Smooth Animations:** Includes subtle transitions and entrance effects.

## 🛠️ Technologies Used

- HTML5 – Structure and form elements
- CSS3 – Styling, animations, and responsive layout
- JavaScript (ES6+) – Calculations, validation, and DOM manipulation

## 📂 Project Structure

```text
tip-calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ Installation and Setup

1. Clone the repository or download the project files.
2. Open the project folder in Visual Studio Code.
3. Ensure that `index.html`, `style.css`, and `script.js` are in the same folder.
4. Open `index.html` in your web browser.
5. Alternatively, use the Live Server extension in VS Code.

No additional libraries, packages, or database setup are required.

## 🧮 Calculation Logic

The calculator uses the following formulas:

**1. Tip Amount**

Tip Amount = Bill Amount × Tip Percentage / 100

**2. Total Bill**

Total Bill = Bill Amount + Tip Amount

**3. Tip Per Person**

Tip Per Person = Tip Amount / Number of People

**4. Total Per Person**

Total Per Person = Total Bill / Number of People

All displayed monetary amounts are formatted to two decimal places.

## 🧪 Example

For a bill amount of ₹1,000, a tip percentage of 10%, and 2 people:

| Item | Amount |
|---|---:|
| Bill Amount | ₹1,000.00 |
| Tip Percentage | 10% |
| Tip Amount | ₹100.00 |
| Total Bill | ₹1,100.00 |
| Tip Per Person | ₹50.00 |
| Total Per Person | ₹550.00 |

## ✅ Validation

- Bill amount must be a valid, non-negative number.
- Number of people must be a positive integer.
- Tip percentage must be between 0% and 100%.
- Division by zero is prevented.
- Invalid inputs display an error message.

## 📱 Responsive Design

The interface adapts to different screen sizes using CSS media queries. Input fields, percentage buttons, and result sections remain accessible on mobile devices, tablets, and desktop computers.

## 🚀 Future Enhancements

- Add more preset tip percentages.
- Support multiple currencies.
- Add a bill splitting history feature.
- Provide a copy or share calculation option.
- Add downloadable bill summaries.
- Include an optional tax calculator.

## 🎓 Learning Outcomes

This project provides practical experience with HTML forms, CSS layouts, responsive design, JavaScript event handling, DOM manipulation, conditional statements, mathematical calculations, input validation, and number formatting.

## 👩‍💻 Author

**Laxmi Gurushiddappa Mettin**

Computer Science and Engineering Student | Full-Stack Developer

## 📄 License

This project is open-source and available for educational and personal use.
