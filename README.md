# glTF Automerge

This project is a web-based 3D graphics application that demonstrates real-time collaboration on glTF models using Automerge. It uses React, Three.js, and `@automerge/react` to load and display a 3D model, and allows for real-time updates to the model data.

## Features

*   **Real-time collaboration:** Multiple users can view and interact with the same 3D model in real-time.
*   **glTF loading:** The application loads and renders glTF models.
*   **3D scene:** The model is displayed in a 3D scene with basic lighting and controls.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **Three.js:** A 3D graphics library for creating and displaying 3D content in a web browser.
*   **@react-three/fiber:** A React renderer for Three.js.
*   **@react-three/drei:** A collection of useful helpers and abstractions for `react-three-fiber`.
*   **@automerge/react:** A library for building real-time collaborative applications with Automerge and React.
*   **Vite:** A build tool that provides a fast development experience for web projects.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.

## Setup

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/gltf-automerge.git
    ```
2.  Install the dependencies:
    ```bash
    cd gltf-automerge
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
4.  Open your browser and navigate to `http://localhost:5173`.

## Usage

The application will load a default glTF model. To collaborate with others, share the URL of the application with them. Any changes made to the model will be reflected in real-time for all connected users.