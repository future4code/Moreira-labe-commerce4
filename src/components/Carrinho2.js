import React from "react";
// import CardProduto from "./CardProduto";
import styled from "styled-components";

const CardPro = styled.div`
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 100px;
  border: 2px solid blueviolet;
  margin: 10px 5px;
`;
//Esta parte está em fase de teste...
class Carrinho2 extends React.Component {
  // constructor(props)

  state = {
    carrinho: [],
    preis: [],
    item: [],
    qtd: [],
    products: [
      {
        id: Date.now() + 1,
        nomeProduto1: "Aerolito",
        preco: 199.99,
      },
      {
        id: Date.now() + 2,
        nomeProduto1: "Camiseta Astronauta",
        preco: 29.99,
      },
      {
        id: Date.now() + 4,
        nomeProduto1: "Camiseta Planetas",
        preco: 29.99,
      },
      {
        id: Date.now() + 5,
        nomeProduto1: "Telescópio",
        preco: 99.99,
      },
    ],
  };

  addProduto = (prodId) => {
    console.log("to rodando");
    const novoPro = {
      id: Date.now(),
      nomeProduto1: this.state.carrinho,
      preco: this.state.carrinho,
    };
    const novaPro = [...this.state.products, novoPro];
    this.setState({ products: novaPro });
    //------------------------------------
    // const novosPro=this.state.products.map((produto)=>{
    //     if(prodId===produto.id){
    //         const noviProd={
    //             ...produto,

    //         }
    //         return(noviProd)
    //     }

    // })
  };

  render() {
    const { products, carrinho } = this.state;
    const cardsProdutox = this.state.products.map((item, index) => {
      return (
        //isso tudo  o componente CardProduto FAKE para testar a função addProduto
        <CardPro key={item.id}>
          <span>{item.nomeProduto1}</span>
          <span> {item.preco}</span>
          <button onClick={this.addProduto}>Adicionar ao carrinho</button>
        </CardPro>
      );
    });
    const novoCarrinho = this.state.products.map((item) => {
      return (
        <div
          key={item.id}
          //   value={carrinho}
          //   nomeProduto={item.nomeProduto1}
          //   precoProduto={item.preco}
        >
          <span>{item.nomeProduto1}</span>
          <span> {item.preco}</span>
        </div>
      );
    });
    return (
      <div>
        <div>
          <div key={products.id}>{cardsProdutox}</div>

          <div>{novoCarrinho}</div>
        </div>
      </div>
    );
  }
}
export default Carrinho2;
