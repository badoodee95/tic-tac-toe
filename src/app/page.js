"use client";
// import Image from 'next/image';
// import styles from './page.module.css';
// import { StrictMode } from 'react';
// import FilterableProductTable from './components/FilterableProductTable';
import { useState } from 'react';



// const PRODUCTS = [
//   { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
//   { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
//   { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
//   { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
//   { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
//   { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
// ];

// const MORE_PRODUCTS = [
//   { category: "Cars", price: "$29999", stocked: true, name: "Toyota" },
//   { category: "Cars", price: "$49000", stocked: false, name: "Tesla" },
//   { category: "Cars", price: "$19999", stocked: true, name: "Ford" },
//   { category: "Trucks", price: "$69999", stocked: true, name: "Ford" },
//   { category: "Trucks", price: "$89999", stocked: true, name: "Tesla" },
//   { category: "Trucks", price: "299999", stocked: true, name: "Lamborghini" },
// ];



// export default function App() {
//   return (
//     <main className={styles.main}>
//       <FilterableProductTable products={PRODUCTS} />;
//       < FilterableProductTable more products={MORE_PRODUCTS} />;
//     </main>
//   );
// }



function Square({ value, onSquareClick }) {
  return (
    <button
      className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}













