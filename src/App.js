import { useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  function handleRemove(id) {
    const newPeople = people.filter((person) => person.id !== id);
    console.log(id);
    setPeople(newPeople);
  }
  return (
    <main>
      <section className="container">
        <h1>{people.length} birthdays today</h1>
          {people.map(({ id, name, age, image }) => (
            <div key={id} className="inner">
              <img src={image} alt={name} className="picture"/>
              <div className="innercontent">
                <h2>{name}</h2>
                <p>{age} years old</p>
                <button onClick={() => handleRemove(id) } className="innerbutton">delete</button>
              </div>
            </div>
          ))}
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
