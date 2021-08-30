import React from 'react';
import './App.css';
import resturantImage from './restaurant.jpg';
function Header(props) {
  return (
    <header>
      <h1> {props.name} Restaurant </h1>
      <img src={resturantImage} alt="JJ's Restaurant" />
    </header>
  )
}
function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} Food Around.</p>
      <ul style={{ textAlign: "center", listStyleType: "none" }}>
        {props.dishes.map((dish, i) => <li key={i}>{dish}</li>)}
      </ul>
    </section>
  )
}
function Footer(props) {
  return (
    <section>
      <p>CopyRight {props.year} By JJ</p>
    </section>
  )
}
const dishes = [
  "Chinese Food",
  "Fast Food",
  "Vegetarian"
];

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));
console.log(dishObjects);
function App() {
  return (
    <div className="App">
      <Header name="JJ's" />
      <Main adjective="amazing" dishes={dishes} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
