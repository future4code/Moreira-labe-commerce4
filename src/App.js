import React from "react";
// import "./App.css";

// import styled from "styled-components";
// import CardProduto from "./components/CardProduto";
import Produto from "./components/Produto";
import Carrinho2 from "./components/Carrinho2";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Produto
          // addProduto={() => {
          //   this.addProduto();
          // }}
          ></Produto>

          <div>
            <Carrinho2></Carrinho2>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

// state = {
//   carrinho: ["1,2,3,4,5"],
//   preis: [],
//   item: [],
//   qtd: [],
//   products: [
//     {
//       id: Date.now() + 1,
//       nomeProduto1: "Aerolito",
//       preco: 199.99,
//     },
//     {
//       id: Date.now() + 2,
//       nomeProduto1: "Camiseta Astronauta",
//       preco: 29.99,
//     },
//     {
//       id: Date.now() + 4,
//       nomeProduto1: "Camiseta Planetas",
//       preco: 29.99,
//     },
//     {
//       id: Date.now() + 5,
//       nomeProduto1: "Telescópio",
//       preco: 99.99,
//     },
//   ],
// };
// // onChangeProduto=(event)=>{
// //   this.setState({carrinho:event.target.value})
// // }
//  addProduto = () => {
//   console.log("to rodando");
//   const novoPro = {
//     id: Date.now(),
//     nomeProduto1: this.state.carrinho.nomeProduto1,
//     preco: this.state.carrinho.preco,
//   };
//   const novaPro = [...this.state.products, novoPro];
//   this.setState({ products: novaPro });
// };
