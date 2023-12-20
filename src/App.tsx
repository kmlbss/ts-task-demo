import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";

function App() {
  const personName = {
    first: "Kamala",
    last: "Shamilova",
  };

  const personList = [
    personName,
    { first: "John", last: "Doe" },
    { first: "Jane", last: "Smith" },
    { first: "Alice", last: "Johnson" },
    { first: "Bob", last: "Williams" },
    { first: "Eva", last: "Jones" },
  ];

  return (
      <div className="App">
        <Greet name="Kamala" messageCount={20} isLoggedIn={false} />
        <Person name={personName} />
        <PersonList list={personList} />
        <Status status="error" />
        <Heading>
          <h2>Placeholder text</h2>
        </Heading>
        <Oscar>
          <Heading>Oscar goes to Kamala Shamilova hehe</Heading>
        </Oscar>
      </div>
  );
}

export default App;
