# Beer Explorer

Beer Explorer is a web application that allows users to discover various types of beers, retrieve detailed information, and receive random beer suggestions. The application is developed using React and TypeScript.

This project was used as an exercise to practice `useEffect`, work with APIs, and solidify React skills.

## Project Overview

- **Frontend:** React, TypeScript
- **Routing:** React Router
- **Styles:** Tailwindcss
- **API:** Beer API

## Project Structure

### Main Components

- **App.tsx:** The main entry point of the application, managing the routing.
- **Home:** The homepage, which links to product pages and a random product suggestion.
- **Products:** Displays a list of all beers.
- **Detailpage:** Shows detailed information about a selected beer.
- **RandomProduct:** Displays a random beer suggestion.

### Styles

- **Tailwindcss:** `index.css` 

### Types and Interfaces

- **IBeer:** Structure for beer data.
- **Rating:** Structure for rating data.

## API and Data Fetching

Data is fetched from SampleAPIs and stored in the respective components. Error handling is implemented to ensure smooth data processing.

## Features

- **Responsive Design:** Optimized for various screen sizes.
- **Error Handling:** Robust handling of data loading errors.
- **Created_By:** FaridTvK