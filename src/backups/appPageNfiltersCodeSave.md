###App Page
```
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
          {produto()}
        </ProductPage>
      </Page>  
    );
  };
};

export default App;

```

###Filters Page
```
import { Component } from "react";

class Filters extends Component {
    render() {
        return (
        <form>
          <input type="text" value={this.props.keyWordValue} placeholder='palavra chave' onChange={this.props.changeKeyWordValue}/>

          <input type="text" value={this.props.minPriceValue} placeholder='preço mínimo' onChange={this.props.changeMinPriceValue}/>

          <input type="text" value={this.props.maxPriceValue} placeholder='preço máximo' onChange={this.props.changeMaxPriceValue}/>
        </form>
        );
    };
};
export default Filters;
```