# 📚 Book Vibe - Your Personal Book Library Manager

**Book Vibe** is a modern React-based web application designed for book enthusiasts. It allows users to browse a collection of books, manage their reading lists, and visualize their progress through interactive charts.

---

## 🔗 Live Demo
Check out the live project here: [https://salauddin-react-book-vibe-project.netlify.app/] 

---

## ✨ Key Features

- **Dynamic Navigation:** Fully responsive Navbar with active route highlighting for a seamless user experience.
- **Dual List Management:** Separate tabs for "Read Books" and "Wishlist" to organize your library efficiently.
- **Smart Sorting:** Sort books dynamically based on **Rating**, **Number of Pages**, or **Publishing Year**.
- **Data Visualization:** An interactive **Triangle Bar Chart** using **Recharts** to display the page counts of books in your read list.
- **Local Storage Persistence:** Integrated with Browser Local Storage to ensure your data stays safe even after a page refresh.
- **Real-time Notifications:** Smooth and professional user alerts using `React-Toastify`.
- **Delete Functionality:** Easily remove books from your lists with a single click.

---

src/
 ┣ components/    # Reusable UI components (NavBar, Banner, Books, BooksStore .)
 ┣ pages/         # Page components (Home, BookDetails, ListedBooks, PagesToRead)
 ┣ utils/         # Helper functions (LocalStorage logic)
 ┣ main.jsx       # Entry point
 ┗ App.jsx        # Root component

## 🛠️ Tech Stack Used

- **Core Framework:** React.js
- **Styling:** Tailwind CSS & DaisyUI
- **Icons:** Lucide React & React Icons
- **Data Visualization:** Recharts
- **Routing:** React Router DOM
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Notifications:** React Toastify

---

 