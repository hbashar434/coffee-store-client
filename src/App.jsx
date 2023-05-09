import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";

const App = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="m-20">
      <h1 className=" text-6xl text-center mt-8 font-bold">Coffee Store</h1>
      <h2 className="text-3xl text-center mt-8 font-bold mb-8">
        Coffee items : {loadedCoffees.length}
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default App;
