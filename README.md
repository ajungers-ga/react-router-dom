# React Router DOM Practice App

This project was built during my Unit 3 Level-Up at General Assembly. My instrcutor helped me set a new goal to deepen my understanding of React Router and how to implement navigation within a single-page React application. I worked through the key features step-by-step and built a small Pokémon app to reinforce concepts like dynamic routing, route parameters, and programmatic navigation.

---

## Topics Covered

### React Router Setup
- Installed `react-router-dom` and set up the project to use `<BrowserRouter>` in `main.jsx`
- Enabled client-side routing so the app feels like a traditional multi-page site without full-page reloads

### Navigation with Links
- Created a `NavBar` with `<Link>` components for:
  - Home (`/`)
  - Pokémon List (`/pokemon`)
  - New Pokémon Form (`/pokemon/new`)

### Static and Dynamic Routes
- Used `<Routes>` and `<Route>` to define what should be displayed at different paths
- Created a dynamic route `/pokemon/:pokemonId` to render details based on URL parameters

### Route Parameters with `useParams()`
- Used the `useParams()` hook to pull the `pokemonId` out of the URL
- Found the matching Pokémon in local state and displayed its individual details on the page

### Controlled Forms with `useState`
- Built a form to add new Pokémon using controlled inputs
- Managed form state with `useState` and cleared the form after submission

### Programmatic Navigation with `useNavigate()`
- Used `useNavigate()` to redirect users to the Pokémon list after submitting the form
- Practiced updating state and navigating without using a traditional link

---

## What I Learned

- I gained confidence setting up and using React Router in a new project from scratch
- I now understand how to use `<Routes>`, `<Route>`, and `<Link>` to manage navigation
- I learned how to use route parameters to dynamically render content tied to a specific item
- I practiced building controlled forms and updating state across components
- I saw how `useNavigate()` can make the user experience smoother after a form is submitted

---

## Tech Stack

- React (Vite)
- React Router DOM
- JavaScript (ES6)
- Basic HTML and CSS

