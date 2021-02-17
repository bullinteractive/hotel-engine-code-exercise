## Github Search, Filter and Sort - React Code Exercise

### Personal Goal
Based on the create-react-app starting point, create a project folder structure suited for reusable components, responsive HOC layouts and a store for state management using only hooks based on a Redux workflow with middleware for side effects (this is a new approach for me). Optimize the project to minimize the amount of API calls needed but without letting the data get too “stale”. Write tests for at least 80% coverage. Utilize styled-components as much as possible. 

### Additional packages
- styled-components for better scoped components
- axios for consistent promises and data handling
- react-icons for some UI polish
- react-router-dom for managing user flow throughout
- use-reducer-logger in a attempt to replicate the helpful redux extensions to visualize the state of the project
- 
### Tasks
- [x] Create project structure conducive to reusable components and managing state with a Redux-like approach using useContext, useReducer, a way to manage side-effects and hopefully log the state somewhere
- [x] Create layout HOC’s 
- [ ] Create responsive scaffolding using styled-component approach
- [x] Create interactive UI elements to show state (loading, disabled, error, etc)
- [x] Create pages for all results
- [ ] (IN PROGRESS) Create function that checks search query in the URL to make API call on page load should the user copy and paste/share the URL
- [ ] (IN PROGRESS) Create page for single result details
- [x] “Preload” single results when user hovers over single result to save API calls 
Create a fallback should a user traverse directly to that URL (like the main search query)
- [x] Create results filter based on language(s) selected
- [ ] (IN PROGRESS) Create results sorting functions for star

#### Objective

The objective is to build a repository search application using the Github repository search API (https://docs.github.com/en/rest/reference/search#search-repositories) that displays the results of a query. The app can query the API directly.

The list should be able to sort by GitHub's default sort key (best match) and number of stars and also should be able to filter by language.

Each result when selected should route to a detailed screen that displays information about the repository. The results should contain the repository name, description, number of stars, language, and the owners name. You can include more information as you see fit to enhance the UI.

Finally, the app should be fully responsive and follow best practices in implementing a responsive website.

#### Requirements

1. Search Input

   - An input to type in the text to search github.

2. Search results

   - Show the results of the search.

3. Sort results

   - By best match (default)
   - Stars

4. Filter results

   - By language

5. Detailed Result Page

   - A page that when a result is clicked shows a detailed screen of the repository.

6. Responsive Design

   - Should render properly on device sizes. (mobile, tablet, laptop, large desktop)

#### Implementation

- The application should be built using React.
- The application should have at least two pages:
  - Search page
  - Details page
- The application should be responsive.
- Please write your code in Javascript or Typescript

#### Evaluation

The solution will be evaluated against the following criteria:

1. **Was the code able to be built and ran locally?**
2. **Code Quality** - is the code clean, simple, commented, modern, well designed?
3. **User Experience** - how simple, intuitive, responsive and clear is the UI?
4. **Error handling** - does the code handle potential errors gracefully?
5. **Clarity** - does the repository have a detailed readme on setup/run/tests?

#### Submission

- Host the source code in a public Github repository

#### Bonus

- Tests that demonstrate the code works correctly and handles anything that might be thrown at it.
