import Fruit from "./Fruit";

const Fruits = () => {
  // const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];
  const fruits = [
    { name: "Apple", price: 10, emojo: "🍎", soldout: true },
    { name: "Mango", price: 7, emojo: "🥭", soldout: false },
    { name: "Banana", price: 2, emojo: "🍌", soldout: true },
    { name: "Orange", price: 5, emojo: "🍊", soldout: false },
    { name: "Pineapple", price: 8, emojo: "🍍", soldout: false },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
         <li key={fruit.name}> {fruit.name} {fruit.price} {fruit.emojo}</li>
        ))}
      </ul>
      <a href=""></a>
      
    </div>
  );
};
export default Fruits;
