import Products from './data/Products.json';
import React from 'react';
import styled from 'styled-components';
import Filters from './components/Filters/Filters.js';
import ShoppingCart from "./components/ShoppingChart/ShoppingCart";     //eliel 23 jan
import ShoppingCartItem from './components/ShoppingChart/ShoppingCartItem';

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
    produtosCarrinho: [],
    prodAddCarrinho: [],
    keyWordValue: '',
    minPriceValue: '',
    maxPriceValue: '',
    crescente: true,
    decrescente: false,
    productsInCart: [         //eliel 23 jan
      {
        id: Date.now() + 1,
        nomeProduto1: "Aerolito",
        preco: 199.99,
        quantity: 1
      },
    ]

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


  onAdd = (produto) => {
    const auxProduto = [produto];
    // let auxCarrinho =
     auxProduto.map((item) => {
      // não tem como dar MAP em objeto, apenas em ARRAY
      let productsCart = this.state.produtosCarrinho.push(item);
      this.setState({
        ...this.state.produtosCarrinho,
        productsCart, //PRESTAR ATENÇÃO NA COPIA
      });
      return Products.id === item.id ? this.state.produtosCarrinho : [];
    });
    let prodAddCarrinho;
      if (prodAddCarrinho) {
        const newProdAddCarrinho = this.state.produtosCarrinho.map(
          (product) => {
            if (produto.id === product.id) {
                 let quantidade = produto.quantity + 1;
              return {
                ...product,
                quantidade,
              };
            }
            return product;
          }
        );
        this.setState({ prodAddCarrinho: newProdAddCarrinho });
      } else {
        const newProdNoCarriho = Products.find(
          (product) => produto.id === product.id
        );
        const produtoParaAdd = [
          ...this.state.prodAddCarrinho,
          { ...newProdNoCarriho, quantity: 1 },
        ];
        this.setState({ prodAddCarrinho: produtoParaAdd });
      }
    }


    onRemoveProductFromCart = (productId) => { //eliel 22 jan
      const newProductsInCard = this.state.productsInCart.map((product)=>{
        if (product.id === productId){
          return {
            ...product, //clonando itens e alterando a quantidade??
            quantity: product.quantity - 1
          }
        }
        return product
      }).filter((product) => product.quantity > 0)
         
      
      this.setState({productsInCart: newProductsInCard})
  
  
    }



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
          <button onClick={() => this.onAdd(produto)}>Adicionar ao carrinho</button>
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
        {this.state.produtosCarrinho.map((item) => {
          return (
            <div key={item.id}>
              {/*fazer +1 no id para mudar quando click*/}
              <li>Produto: {item.name}</li>
              {/* <img src={item.imageUrl} alt={item.name} /> */}
              <p>ValorR$: {item.value}</p>
              <p>Qtd.:{item.quantity}</p>
            </div>
          );
        })}
        
        {/* <ShoppingCart>                                  ao descomentar quebra o código :(
          productsInCart = {this.state.productsInCart}
          onRemoveProductFromCart = {this.onRemoveProductFromCart}
        </ShoppingCart> */}
        
      </Page>  
    );
  };
};
export default App;