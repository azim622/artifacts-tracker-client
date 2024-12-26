# Historical Artifacts Tracker

## Project Purpose
The **Historical Artifacts Tracker** is a web application that allows users to browse, view, and manage details of historical artifacts. Users can also contribute by adding new artifacts, liking artifacts, and tracking their contributions. This project emphasizes user-friendly design, secure data handling, and robust CRUD operations.

---

## Live URL
[https://histrorical-artifacts-tracker.web.app](#)

---

## Key Features

### General Features
- **Home Page:**
  - Eye-catching banner/slider with historical themes.
  - Featured artifacts section showcasing the six most-liked artifacts.
  - Two additional meaningful sections.
- **Fully Responsive:**
  - Works seamlessly on mobile, tablet, and desktop devices.
- **Dynamic Titles:**
  - Titles change dynamically based on the current route.
- **404 Page:**
  - Custom 404 page for unmatched routes.

### Authentication System
- **Login:**
  - Email/password authentication.
  - Social login option (Google).
  - Error handling for incorrect credentials.
- **Register:**
  - User-friendly registration form with validation.
  - Password requirements: at least one uppercase, one lowercase, and six characters.

### Artifacts Management
- **All Artifacts Page:**
  - Displays a list of all artifacts in a card format.
  - Search functionality by artifact name.
- **Add Artifact Page:**
  - Private/protected route.
  - Form to add new artifacts with proper validation.
  - Stores data securely in the database with a success notification.
- **Artifact Details Page:**
  - Displays detailed information about an artifact.
  - Includes a toggle-like button to like/dislike artifacts.
- **My Artifacts Page:**
  - Private/protected route.
  - Displays artifacts added by the logged-in user with options to update or delete.
  - Confirmation dialog before deletion.
- **Liked Artifacts Page:**
  - Displays artifacts liked by the user.

### Notifications and Feedback
- Toasts/Sweet Alerts for:
  - Successful CRUD operations.
  - Errors during login/registration.
  - Confirmations for deletion.
- Spinner for loading states.

### Security
- Firebase keys and MongoDB credentials secured via environment variables.
- JWT-based authentication for private routes.

### Deployment
- Hosted client-side on Firebase.
- Hosted server-side on Vercel.

---

## Technologies and Tools Used

### Frontend
- **React** with **React Router Dom** for SPA functionality.
- **Tailwind CSS** for styling.
- **Lottie React** for animations.
- **React-tooltip** for interactive tooltips.
- **Framer Motion** for advanced animations.

### Backend
- **Node.js** with **Express.js** for server-side logic.
- **MongoDB** for data storage.
- **JWT** for secure authentication.

### Hosting
- **Firebase** for client-side hosting.
- **Vercel** for server-side hosting.

### Other Packages
- **Axios**: For API requests.
- **Sweet Alert**: For notifications.
- **Dotenv**: For environment variables.
- **Cors**: To handle cross-origin requests.

---

## Installation and Setup

### Prerequisites
- Node.js installed on your system.
- MongoDB database setup.
- Firebase project configured.

### Steps to Run Locally

#### 1. Clone the Repository
```bash
git clone https://github.com/programming-hero-web-course2/b10a11-client-side-azim622
```

#### 2. Install Dependencies
##### Client-Side
```bash
cd client
npm install
```
##### Server-Side
```bash
cd server
npm install
```

#### 3. Configure Environment Variables
Create a `.env` file in both client and server directories.



## Additional Notes
- Ensure no CORS/404/504 errors occur in production.
- Logged-in users should not redirect to the login page when reloading private routes.
- Ensure smooth navigation across routes without errors.

---

## Contact
If you have any questions or need assistance, feel free to reach out at [fazleazim622@gmail.com].

Happy Coding!
