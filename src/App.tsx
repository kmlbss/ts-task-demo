import "./App.css";
import {User} from "./components/User";
import {UserContextProvider} from "./context/UserContext";


function App() {
  // const personName = {
  //   first: "Kamala",
  //   last: "Shamilova",
  // };

  // const personList = [
  //   personName,
  //   { first: "John", last: "Doe" },
  //   { first: "Jane", last: "Smith" },
  //   { first: "Alice", last: "Johnson" },
  //   { first: "Bob", last: "Williams" },
  //   { first: "Eva", last: "Jones" },
  // ];

  return (
      <div className="App">
        <UserContextProvider>
          <User/>
        </UserContextProvider>
      </div>
  );
}

export default App;
