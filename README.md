# Angular 19 Users & Posts App

This is an Angular 19 application that meets all the requirements of the assignment.  
It fetches data from [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/), provides a modern, responsive UI, and works on all major browsers.

---

## 📌 Features

- **Header**
  - Left: Site title (links to the home page)
  - Right: Live date and time
- **Navigation (Side-menu)**
  - Displayed on the left side
  - Contains two buttons: **Users** and **Posts**
- **Users Page**
  - Full user list in a table (Name, Surname, Phone, Email, Company Name)
  - **Search field:** Search by name, surname, or email
  - Each user has two buttons:
    - **Posts** – with a hover animation, navigates to the selected user's posts page
    - **ToDo** – opens the user's todo list, where completed tasks are highlighted in green
- **Posts Page**
  - Displays all posts for the selected user as cards (Title, Description, Author)
  - Each post has a **Details** button – opens a popup with the full post title and description
- **Footer**
  - Fixed at the bottom and centered on all screen sizes

---

## ⚙️ Technical Details

- **API:** Fetches users and posts from [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/)
- **Responsive Design:**
  - *1024px and above*: content is centered and uses 50% of the width
  - *Below 1024px*: content uses 80% of the width
- **Cross-browser compatibility:** Works in all modern browsers

---

## 🚀 Getting Started

1. **Install dependencies:**
    ```bash
    npm install
    ```
2. **Start the application:**
    ```bash
    ng serve
    ```
3. Open your browser and go to: [http://localhost:4200](http://localhost:4200)

---

## 🌟 Additional Features

- Posts are filtered to show only those by the selected user
- Popup dialog for viewing post details
- In the todo list, completed tasks are highlighted in green

---

## 🖥 Layout Responsiveness

- **Standard monitors (1024px+):** Content is centered, 50% width
- **Mobile/tablet:** Content is centered, 80% width

---

