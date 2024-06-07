import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //   const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>First React Pizza co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const numofpizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numofpizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine, 6 creative dishes to choose from, All
            from our stone oven , all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaobj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu..Thanks for your patience</p>
      )}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach, and ricotta cheese"
        price={10}
        imag="pizzas/spinaci.jpg"
      />
      <Pizza
        name="Pizza Funghi"
        ingredient="Tomato, mozarella, mushrooms, and onion"
        price={12}
        imag="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}
const Footer = () => {
  const hour = new Date().getHours();
  const openhour = 12;
  const closehour = 22;
  const Isopen = hour >= openhour && hour <= closehour;
  //   if (hour >= openhour && hour <= closehour)
  //     window.alert("we're currently open!");
  //   else window.alert("sorry! we're closed");
  return (
    <footer className="footer">
      {Isopen ? (
        <Order closehour={closehour} />
      ) : (
        <p>
          We are happy to welcome you at {openhour}:00 and {closehour}:00.{" "}
        </p>
      )}
    </footer>
  );
  //return React.createElement("footer", null, "We're currently open!");
};

function Order({ closehour }) {
  return (
    <div className="order">
      <p>We're open until {closehour}:00. Come visit us or order online!</p>
      <button className="btn">order</button>
    </div>
  );
}

function Pizza({ pizzaobj }) {
  console.log("pizzaobj", pizzaobj);
  //if (pizzaobj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaobj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaobj.photoName} alt={pizzaobj.name}></img>
      <div>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>
        <span>{pizzaobj.soldOut ? "Sold out" : pizzaobj.price}</span>
      </div>
    </li>
  );
}

//Render React v18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
