import Products from './data/Products.json';
import React from 'react';
import styled from 'styled-components';
import Filters from './components/Filters/Filters.js';
import Produto from "./components/Produto";
import Carrinho2 from "./components/Carrinho2";
// import CardProduto from "./components/CardProduto";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  form{
    margin: 30px auto;
    display: flex;
    justify-content: space-around;
    width: 530px;
    input{

    }
  }
`;
const ProductPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 15px;
  width: 80vw;
  margin: 20px auto;
  justify-content: space-around;
  justify-items: center;
`;
const Card = styled.div`
  border: 1px solid black;
  text-align: center;
  width: fit-content;
`;

class App extends React.Component{

  state = {
    keyWordValue: '',
    minPriceValue: '',
    maxPriceValue: ''
  }

  changeKeyWordValue = (event) => {
    this.setState({keyWordValue: event.target.value});
  };
  changeMinPriceValue = (event) => {
    this.setState({minPriceValue: event.target.value})
  };
  changeMaxPriceValue = (event) => {
    this.setState({maxPriceValue: event.target.value})
  };

  render() {

    const produto = () => Products
    .filter((produto) => {
      return produto.name.toLowerCase().includes(this.state.keyWordValue.toLowerCase());
    })
    .filter((produto) => {
      return produto.value >= this.state.minPriceValue ? true : false;
    })
    .filter((produto) => {
      if (this.state.maxPriceValue !== '') {
        return produto.value <= this.state.maxPriceValue ? true : false;
      } else {
        return true;
      }
    })
    .map((produto) => {
      return (
        <Card>
          <h4>{produto.name}</h4>
          <img src={produto.imageUrl} alt="" />
          <p>{produto.value}</p>
        </Card>
      );
    });

    return (
      <Page>
        <Filters 
          keyWordValue={this.state.keyWordValue}
          minPriceValue={this.state.minPriceValue}
          maxPriceValue={this.state.maxPriceValue}
          changeKeyWordValue={this.changeKeyWordValue}
          changeMinPriceValue={this.changeMinPriceValue}
          changeMaxPriceValue={this.changeMaxPriceValue}
        />
        <ProductPage>
            <Produto
          // addProduto={() => {
          //   this.addProduto();
          // }}
          ></Produto>
          {produto()}
        </ProductPage>
        <Carrinho2/>   
      </Page>  
    );
  };
};
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
