# Hotel Search

Display the latest hotel deals with a feature to sort by price.


## 🚀 Quick Start
1. `yarn`: Install package dependencies
2. `yarn serve`: Spin up the mock server to run the app independently with defined mock data at [port 5000](http://localhost:5000)
3. `yarn start`: Start the application at [port 3000](http://localhost:3000)


## ☑️ Testing
* `yarn test`: Run unit tests
* `yarn test:coverage`: Run unit tests with a coverage report



## Focus Areas and Trade-Offs
Due to the limited time allocated to the coding test, there are certain trade-offs made while building the application.
### Focus Areas
* _Unit Testing_: The quality of unit and component testing are highlighted through the level of testing found in `components/*` and `container/HotelsList/HotelsList.test.tsx` files. Unit testing required for the `HotelsList.connected` container had been limited, however, the `hotels.api` was sufficiently tested.
* _Styling_: Although not pixel perfect, `components/HotelCard.tsx` has custom styling which aims to be as-close to the provided design screenshot as possible. Other parts of the application may feel lacking in some styling effort.
* _Global State Management_: Due to the scope of the feature, it currently does not require a global state management tool (e.g. Redux), hence, a decision was made to only use a tool (axios) on an as-needed basis.

### Trade-Offs
* _Non-functional Requirements_: There was very little focus put on accessibility due to time constraints
* _Mobile Responsiveness_: Mobile devices are currently not catered to because of time constraints, I would otherwise do a mobile-first approach
* _Unit Testing_: Quality of tests surrounding connected containers could still be improved

## 🛠 Technical Stack
* `styled-components:` CSS in JS styling
* `json-server:` Easy API mock stubbing
* `axios:` To handle API requests
* `eslint & prettier:` Maintain coding style throughout the application
* `jest & React testing library:` For unit and component testing
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
