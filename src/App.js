import Products from './data/Products.json';
import React from 'react';
import styled from 'styled-components';
import Filters from './components/Filters/Filters.js';

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
const CardProdutoTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: lightcyan;
  width: 800px;
  height: 50px;
`;

class App extends React.Component{

  state = {
    keyWordValue: '',
    minPriceValue: '',
    maxPriceValue: '',
    crescente: true,
    decrescente: false
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
  sortPrecoDec = () => {
    this.setState({crescente: false, decrescente: true});
  };
  sortPrecoAsc = () => {
    this.setState({crescente: true, decrescente: false});
  };

  render() {

    const produto = () => Products
    .sort((produtoAtual, proximoProduto) => {
      if (this.state.crescente) {
        return produtoAtual.value - proximoProduto.value;
      }
      else {
        return proximoProduto.value - produtoAtual.value;
      }
    })
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
          <button>Adicionar ao carrinho</button>
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
        <CardProdutoTop>
              <p>Número de produtos: {Products.length}</p>
              <div>
                <button onClick={this.sortPrecoDec}>Ordem Decrescente</button>
                <button onClick={this.sortPrecoAsc}>Ordem Crescente</button>
              </div>
        </CardProdutoTop>
        <ProductPage>
            {produto()}
        </ProductPage>
      </Page>  
    );
  };
};
export default App;