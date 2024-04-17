# Pictures of Dogs!

## Overview

This simple app is for dog lovers everywhere. It utilises Dog CEO's [Dog API](https://dog.ceo/dog-api/) to fetch images and display them to the user.

## Functionality

The app has two pages to view:

- **Random Dog** - Displays a random image of a dog and allows users to click the "Fetch another" button to view another random dog image.
- **Select a Breed** - Allows a user to select a breed of dog. Once the dog breed has been selected, a random image of that breed of dog will be rendered. If a user selects no breed, no image will be shown.

  - The user can also supply a filter to reduce the number of options within the dropdown. The dropdown contains the filtered breeds, the currently selected breed and the option to unselect a breed.

## Get it running

To get the app running:

- Ensure that you have [node](https://nodejs.org/en) installed on your computer (the app was built with version 21.6.0)
- Open a terminal in the root of the project
- To install dependencies, run
  ```
  npm ci
  ```
- To run the app, run:
  ```
  npm run dev
  ```

## Review

Please go through the application and review the code that has been written. In a word document, please note improvements that can be made to the code, focusing on:

- Naming convention
- Accessibility
- File Architecture

Once you have finished reviewing the code, please email across your notes and we will schedule a call to discuss them with you.
