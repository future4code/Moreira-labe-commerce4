import Products from "./data/Products.json";
import React from "react";
import styled from "styled-components";
import Filters from "./components/Filters/Filters.js";
// import ShoppingCart from "./components/ShoppingChart/ShoppingCart"; //eliel 23 jan
// import ShoppingCartItem from "./components/ShoppingChart/ShoppingCartItem";

const Page = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* flex-direction: row; */
  background-color: #f5f5f7;
  form {
    margin: 30px auto;
    display: flex;
    justify-content: space-around;
    width: 530px;
    input {
      margin: 0 10px;
      border-radius: 30px;
      padding: 5px;
      border: none;
      background-color: #e5d4cd;
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
  background-color: #fff8e6;
  text-align: center;
  width: fit-content;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  border-radius: 30px;
`;
const CardProdutoTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: #2d1e19;
  background-color: #b69284;
  width: 100%;
  height: 50px;
  font-weight: bold;
  button {
    margin: 15px;
    background-color: #e5d4cd;
    border: none;
    border-radius: 30px;
    padding: 4px;
  }
`;

const Carrinho = styled.div`
  h1 {
    color: white;
  }
  color: #2d1e19;
  background-color: #e5d4cd;
`;
const Botao = styled.button`
  color: white;
  outline: none;
  border: none;
  border-radius: 30px;
  background-color: #b69284;
`;
class App extends React.Component {
  state = {
    keyWordValue: "",
    minPriceValue: "",
    maxPriceValue: "",
    crescente: true,
    decrescente: false,
    produtosCarrinho: [],
  };

  changeKeyWordValue = (event) => {
    this.setState({ keyWordValue: event.target.value });
  };
  changeMinPriceValue = (event) => {
    this.setState({ minPriceValue: event.target.value });
  };
  changeMaxPriceValue = (event) => {
    this.setState({ maxPriceValue: event.target.value });
  };
  sortPrecoDec = () => {
    this.setState({ crescente: false, decrescente: true });
  };
  sortPrecoAsc = () => {
    this.setState({ crescente: true, decrescente: false });
  };
  onAdd = (produtoId) => {
    const productsInCart = this.state.produtosCarrinho.find(
      (item) => produtoId === item.id
    );

    if (productsInCart) {
      const newProductsInCart = this.state.produtosCarrinho.map((item) => {
        if (produtoId === item.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      this.setState({ produtosCarrinho: newProductsInCart });
    } else {
      const productToAdd = Products.find((item) => produtoId === item.id);
      const newProductsInCart = [
        ...this.state.produtosCarrinho,
        { ...productToAdd, quantity: 1 },
      ];
      this.setState({ produtosCarrinho: newProductsInCart });
    }
  };
  onRemoveProductFromCart = (productId) => {
    //eliel 22 jan
    const newProductsInCard = this.state.produtosCarrinho
      .map((product) => {
        if (product.id === productId) {
          return {
            ...product, //clonando itens e alterando a quantidade??
            quantity: product.quantity - 1,
          };
        }
        return product;
      })
      .filter((product) => product.quantity > 0);
    this.setState({ produtosCarrinho: newProductsInCard });
  };
  render() {
    const produto = () =>
      Products.sort((produtoAtual, proximoProduto) => {
        if (this.state.crescente) {
          return produtoAtual.value - proximoProduto.value;
        } else {
          return proximoProduto.value - produtoAtual.value;
        }
      })
        .filter((produto) => {
          return produto.name
            .toLowerCase()
            .includes(this.state.keyWordValue.toLowerCase());
        })
        .filter((produto) => {
          return produto.value >= this.state.minPriceValue ? true : false;
        })
        .filter((produto) => {
          if (this.state.maxPriceValue !== "") {
            return produto.value <= this.state.maxPriceValue ? true : false;
          } else {
            return true;
          }
        })
        .map((produto, index) => {
          return (
            <Card key={index}>
              <h4>{produto.name}</h4>
              <img src={produto.imageUrl} alt="" />
              <p>{produto.value}</p>
              <Botao onClick={() => this.onAdd(produto.id)}>
                Adicionar ao carrinho
              </Botao>
              {/* onClick={this.onAdd} */}
            </Card>
          );
        });

    return (
      <Page>
        <div>
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

          <ProductPage>{produto()}</ProductPage>
        </div>
        <Carrinho>
          <h1>Carrinho</h1>
          {this.state.produtosCarrinho.map((item, index) => {
            return (
              <div key={item.id}>
                {/*fazer +1 no id para mudar quando click*/}

                <li>Produto: {item.name}</li>

                {/* <img src={item.imageUrl} alt={item.name} /> */}
                <p>Valor R$: {item.value}</p>

                <p>Qtd.:{item.quantity}</p>
              </div>
            );
          })}
        </Carrinho>
        {/* <ShoppingCart
          produtosCarrinho={this.state.produtosCarrinho}
          onRemoveProductFromCart={this.onRemoveProductFromCart}
        >
          {/* ao descomentar quebra o código :(  ={" "} */}
        {/* productsInCart={this.state.produtosCarrinho}
          onRemoveProductFromCart = {this.onRemoveProductFromCart} 
        </ShoppingCart> */}
      </Page>
    );
  }
}
export default App;
