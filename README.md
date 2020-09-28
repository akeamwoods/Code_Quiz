# Code_Quiz
Notes:
- I spent roughly 60-70 minutes in total on these 3 questions.
- I upgraded both of react questions (2, 3) to TypeScript as I prefer the added security of static type checking and am more used to working with TypeScript as opposed to vanilla JS. To upgrade it I simply ran the following commands: yarn add typescript @types/node @types/react @types/react-dom @types/jest and then npx tsc --init to initalise the tsconfig file.
- I'm very unhappy with the styling of my work, however with such limited time constraints I had to sacrifice looks in favour of functionality. 

## Question 1
Notes:
- Took roughly 5 minutes to complete.
- Would make use of a function if I was not under time constraints.

## Question 2:
Packages used:
- react-virtualized https://www.npmjs.com/package/react-virtualized
- styled-components https://www.npmjs.com/package/styled-components

Notes:
- Took roughly 25 minutes to complete.
- I used react-virtualized as it is efficient at rendering large lists of data (only renders what is currently displayed).
- The height of the table is set to 400px. I would make this dynamic if I had the time, however that is more complex and react-virtualized requires a set height to prevent an infinite scrolling issue caused due to the nature of virtulization. There is a more complex, dynamic solution to this as opposed to a set height, however to stay around the hour mark I opted for the simpler solution.
- I dynamically populate the column headers from the data itself. I would probably have a helper function which converts the camelcase data strings into more presentable text if I were to do this in production.
- Styled-Components was definitely overkill for this as I only have 2 css style changes.

## Question 3:
Packages used:
- formik https://www.npmjs.com/package/formik
- yup https://www.npmjs.com/package/yup
- react-datepicker https://www.npmjs.com/package/react-datepicker
- styled-components https://www.npmjs.com/package/styled-components

Notes:
- Took roughly 35 minutes to complete.
- I chose formik as my form solution as it is a package I have experience with and it provides easy methods for validation via yup.
- I used react-datepicker to enable users to select the date of birth as I believe a datepicker is the most intuitive and user-friendly way for selecting dates.
- I once again used styled-components, there are a few empty styles left in the file which is where I ran out of time.
- A typescript error was causing me issues, so I used @ts-ignore to mask it. Obviously this is not a desirable solution and would not be left as it is when put into production.

## Question 4:
Notes:
- Did not have time to start this question.

