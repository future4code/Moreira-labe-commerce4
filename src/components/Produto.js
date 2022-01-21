import React from "react";
import CardProduto from "./CardProduto";
import styled from "styled-components";
import aerolito from "../img/aerolito.png";
import camisetaUm from "../img/camiseta--astronauta.jpg";
import camisetaDois from "../img/camiseta--nave.jpg";
import tele from "../img/telescopio.jpg";

const MainContainerProdutos = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: lightcoral;
  align-items: center;
  justify-items: center;
  width: 800px;
  height: 400px;
`;

const CardProdutoTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: lightcyan;
  width: 800px;
  height: 50px;
`;

class Produto extends React.Component {
  state = {
    produtosAdd: [],

    produtosPreco: [],
    produtos: [
      {
        id: Date.now() + 1,
        nomeProduto1: "Aerolito",
        preco: 199.99,
        foto: aerolito,
      },
      {
        id: Date.now() + 2,
        nomeProduto1: "Camiseta Astronauta",
        preco: 29.99,
        foto: camisetaUm,
      },
      {
        id: Date.now() + 4,
        nomeProduto1: "Camiseta Planetas",
        preco: 29.99,
        foto: camisetaDois,
      },
      {
        id: Date.now() + 5,
        nomeProduto1: "Telescópio",
        preco: 99.99,
        foto: tele,
      },
    ],
  };

  sortPrecoDec = () => {
    const sortedProdutosAsc = this.state.produtos.sort((a, b) => {
      return a.preco - b.preco;
    });
    this.setState({ produtos: sortedProdutosAsc });
  };

  sortPrecoAsc = () => {
    const sortedProdutosDes = this.state.produtos.sort((a, b) => {
      return b.preco - a.preco;
    });
    this.setState({ produtos: sortedProdutosDes });
  };

  render() {
    const cardsProdutos = this.state.produtos.map((item, index) => {
      return (
        //isso tudo  o componente CardProduto
        <CardProduto
          key={item.id}
          foto={item.foto}
          produto={item.nomeProduto1}
          preco={item.preco}
        ></CardProduto>
      );
    });

    return (
      <div>
        <MainContainerProdutos>
          <div>
            <CardProdutoTop>
              <p>Número de produtos: {this.state.produtos.length}</p>
              <button onClick={this.sortPrecoDec}>Ordem Decrescente</button>
              <button onClick={this.sortPrecoAsc}>Ordem Crescente</button>
            </CardProdutoTop>
          </div>
          {cardsProdutos}
        </MainContainerProdutos>
      </div>
    );
  }
}

export default Produto;
