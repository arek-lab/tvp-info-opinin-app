# Angular Standalone Web Application Starter

This project serves as a base for building a web application using **Angular Standalone** components.  
It features authentication via **HTML cookies** with two login methods:

- **Standard login** (email + password)
- **Google OAuth login**

The app is fully compatible with a **Node.js server** available in this repository:  
👉 [Link to compatible Node.js server (your repository)](https://github.com/arek-lab/node-base-auth)

## Features

- **Authentication using HTTP-only cookies**  
  Secure session management via cookies, eliminating token storage in localStorage or sessionStorage.

- **Standard login and registration**  
  Email/password-based authentication flows.

- **Google OAuth 2.0 login**  
  Seamless sign-in and registration using Google OAuth, integrated with backend via Passport.js.

- **Standalone Angular components**  
  Modern Angular architecture with standalone components for improved modularity and tree-shaking.

- **Routing Guards**  
  Protect routes using Angular’s `CanActivate` guards based on user authentication status.

## Prerequisites

- Compatible Node.js backend server located in **this repository**, serving the authentication API.
- Angular CLI (version 15 or higher).
- Google OAuth credentials configured with proper redirect URIs.

## Getting Started

1. Clone this repository.
2. Configure your environment variables for the backend URL and Google OAuth client ID.
3. Run the Node.js backend server included in this repository and ensure it is accessible.
4. Start the Angular application using the Angular CLI.

## Environment Setup

Create an environment file (e.g., `src/environments/environment.ts`) with appropriate API URL.

For production builds, make sure to update `environment.prod.ts` accordingly.

<pre> ``` src/ ├── app/ │ ├── auth/ │ │ ├── auth.component.ts │ │ ├── google-callback.component.ts │ │ ├── auth.service.ts │ ├── home-auth.component.ts │ ├── home-non-auth.component.ts │ ├── loader/ │ ├── navbar/ │ ├── app.routes.ts │ ├── app.component.ts ├── environments/ │ ├── environment.ts │ ├── environment.prod.ts ``` </pre>

## License

MIT License
