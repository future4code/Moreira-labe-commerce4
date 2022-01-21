import React from "react";
import CardProduto from "./CardProduto";
import styled from "styled-components";

const CardPro = styled.div`
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 100px;
  border: 2px solid blueviolet;
  margin: 10px 5px;
`;

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
  
//  onChangeProduto=(event)=>{
//  this.setState({carrinho:event.target.value})}
// addProduto=(id)=>{
//     let tempCart=[...this.state.carrinho];
//     let tempPro=[this.state.products];
//     let tempItem=tempCart.find(item=>item.id===id);
//     if(!tempItem){
//         tempItem=tempPro.find(item=>item.id===id);
//         // let total=tempItem.preco;
//         let cartItem={...tempItem,count:1}
//         tempCart=[...tempCart,cartItem];
//     }else{
//         tempItem.count++;
//         tempItem.total=tempItem.price*tempItem.count;
//         tempItem.total=parseFloat(tempItem.total.toFix(2))
//     }

// }

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

  render(){
    const{products,carrinho}=this.state
     const cardsProdutox = this.state.products.map((item, index) => {
       return (
         //isso tudo  o componente CardProduto
         <CardPro
           key={item.id}
         >
           <span>{item.nomeProduto1}</span>
           <span> {item.preco}</span>
           <button onClick={this.addProduto}>Adicionar ao carrinho</button>
         </CardPro>
       );
     });
    const novoCarrinho = this.state.products.map((item) => {
     
        return (
          
        <div  key={item.id}
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
          <div key={products.id}>
            {cardsProdutox}
            {/* <CardPro>
              <p>{this.state.nomeProduto1}</p>
              <p>{products.preco}</p>
              <button onClick={this.addProduto}>Adicionar ao carrinho</button>
            </CardPro> */}
            {/* onClick={this.props.addProduto} */}
          </div>

          <div>{novoCarrinho}</div>
        </div>
      </div>
    );
  }
}
export default Carrinho2;

// function Carrinho2(props) {
//     // const cartItems=props;
//     // const onAdd=props;
//     const ListaCarrinho = ()=>produtos.map((item) => {
//         return (
//           <div>
//             <div>
//               <Carrinho2
//                 key={item.id}
//                 nomeProduto={item.nomeProduto1}
//                 precoProduto={item.preco}
//                 // onAdd={onAdd}
//               ></Carrinho2>
//             </div>
//             <div>
//                 {ListaCarrinho}
//                  {/* .length===0 && <div>O carrinho esta vazio</div> } */}
//             </div>
//           </div>
//         );
//       });

//   return (
//     <div>
//       {ListaCarrinho}
//       </div>

//   );
// }
// export default Carrinho2;
