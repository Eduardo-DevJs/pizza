import Container from "./Components/container/Container";
import Header from "./Components/header";
import Item from "./item";
import { pizzaJson } from "./data/pizzas";
import { useState } from "react";
import { PizzaProps } from "./types/pizza";
import Modal from "./modal";

export default function App() {
  const [selectedPizza, setSelectedPizza] = useState<PizzaProps | null>(null);

  function toggleModal(pizza: PizzaProps | null) {
    setSelectedPizza(pizza);
  }

  return (
    <div>
      <Header />
      <Container>
        <h1 className="mb-10 font-bold text-4xl text-zinc-600">Pizzas</h1>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pizzaJson.map((pizza) => (
            <Item
              onClick={() => toggleModal(pizza)}
              img={pizza.img}
              key={pizza.id}
              price={pizza.price}
              title={pizza.name}
              description={pizza.description}
            />
          ))}
        </ul>

        {selectedPizza && (
          <Modal
            sizes={selectedPizza.sizes}
            handleCloseModal={() => toggleModal(null)}
            price={selectedPizza.price}
            img={selectedPizza.img}
            name={selectedPizza.name}
            description={selectedPizza.description}
          />
        )}
      </Container>

      <footer className="p-5 text-center">
        <h2 className="font-bold text-xl">Feito por Dudu Oliveira - 2024</h2>
      </footer>
    </div>
  );
}
