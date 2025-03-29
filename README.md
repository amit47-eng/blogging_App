# Blogging App

This is a full-stack blogging application built with React for the frontend and a Node.js/Express backend. Users can create, view, edit, and delete blog posts. The app also supports user authentication and profile management.

## Features

- **User Authentication**: Login and sign-up functionality.
- **Post Creation**: Users can create posts with titles, descriptions, tags, and images.
- **Post Management**: View, edit, and delete posts.
- **Dynamic Updates**: Newly created posts are dynamically displayed.
- **Responsive Design**: Optimized for various screen sizes.
- **Profile Management**: Users can view and manage their profiles.

## Tech Stack

- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Other Tools**: Axios, React Router

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/amit47-eng/blogging_App.git
   cd blogging-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser:
   ```
   http://localhost:5173
   ```

## Backend Setup

Ensure the backend server is running. The backend should expose the following endpoints:

- `POST /api/v1/user/login`: User login
- `POST /api/v1/user/createuser`: User registration
- `GET /api/articles`: Fetch all articles
- `GET /api/articles/:id`: Fetch a single article by ID
- `POST /api/createArticle`: Create a new article

Refer to the backend repository for setup instructions.

## Folder Structure

```
src/
├── App.jsx               # Main app component
├── Login.jsx             # Login page
├── SignUp.jsx            # Sign-up page
├── Profile.jsx           # User profile page
├── Settings.jsx          # Settings page
├── main/
│   ├── body.jsx          # Main content area
│   ├── post.jsx          # Post creation form
│   ├── article.details.jsx # Article details page
│   ├── artical.list.jsx  # Article list component
├── header/
│   ├── header.jsx        # Header component
│   ├── navbar.jsx        # Navigation bar
├── aside/
│   ├── aside.jsx         # Sidebar component
├── fotter/
│   ├── fotter.jsx        # Footer component
```

## Usage

1. **Sign Up**: Create a new account using the sign-up page.
2. **Login**: Log in with your credentials.
3. **Create Posts**: Use the post creation form to add new articles.
4. **View Articles**: Browse the list of articles or view individual articles.
5. **Edit/Delete Posts**: Manage your posts from the profile page.

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
REACT_APP_BACKEND_URL=http://localhost:5001
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any questions or feedback, feel free to reach out:

- **Email**: av495267@gmail.com
- **GitHub**: [amit47-eng](https://github.com/amit47-eng)
