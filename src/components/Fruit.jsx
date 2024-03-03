export default function Fruit({ name, emojo, price,soldout }) {
  return (
    <>
      {/* {name} {emojo} ${price} */}
       
        <li>
          {emojo} {name} {price} {soldout? "soldOut":""}
        </li>
     
    </>
  );
}
