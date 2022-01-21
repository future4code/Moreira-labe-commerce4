// import React from "react";
// import { useState } from "react";
// import aerolito from "../img/aerolito.png";
// import camisetaUm from "../img/camiseta--astronauta.jpg";
// import camisetaDois from "../img/camiseta--nave.jpg";
// import tele from "../img/telescopio.jpg";
// // import Produto from "./Produto";
// import styled from "styled-components";

// // import Produto from "./components/Produto"; //Nãopego nada de produtos, mas envio
// const CardProdutos = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 180px;
//   height: 276px;
//   border: 2px solid blueviolet;
//   margin: 10px 5px;
// `;
// const CardProdutoFoto = styled.img`
//   width: 100%;
//   height: 160px;
// `;

// function Carrinho(props) {

//   const [cartItems, setCartItems] = useState([]);
//   const [products] = useState([
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
//   ]);
// const onAdd=(product)=>{
//     const exist=cartItems.find(x=>x.id===product.id)
//     if(exist){
//         setCartItems(cartItems.map(x=>x.id===product.id?{...exist,qty:exist.qty+1}:x))
//     }else{
//         setCartItems([...cartItems,{...product,qty:1}])
//     }
// }

// //   const addToCart = (produto) => {
// //     console.log("Hey");
// //     setCart([...cart, produto]);
// //   };
//   //   const adicionarProd = () => {
//   //     console.log("Eu estou sendo chamadaa");
//   //     // Adiciona um post à lista
//   //     const novoProd = {
//   //       id: Date.now(),
//   //       nomeProduto2: this.state.products.nomeProduto1,
//   //       preco: this.state.products.preco,
//   //     };

//   //     const novaListaDeProd = [novoProd, ...this.state.products];
//   //     console.log("novaListaa", novaListaDeProd);
//   //     if (cart.length === 0) {
//   //       this.setState({ products: novaListaDeProd });
//   //     }
//   //   };


//   const ListaCarrinho = products.map((item) => {
//     return (
//       <div key={item.id}>
//         <div>
//           <p>{item.nomeProduto1}</p>
//           <p>{item.preco}</p>
//         </div>
//       </div>
//     );
//   });

//   return (
//     <div>
//       <div>
//         {ListaCarrinho}
//         {/* <span key={products.id}>{products.nomeProduto1}</span>
//         <span>{products.preco}</span>, */}
//       </div>
    
//     </div>
//   );
// }
// export default Carrinho;
//   //   return (
//   //     <div>
//   //       <div>
//   //          {products.map((post) => {
//   //             if(addToCart){
//   //                 return (
//   //                   <div>
//   //                     <span key={post.id}>{post.nomeProduto1}</span>
//   //                     <span>{post.preco}</span>,
//   //                   </div>
//   //                 );
//   //             }
//   // {products.map((post) => {
//   //         if(addToCart){
//   //             return (
//   //               <div>
//   //                 <span key={post.id}>{post.nomeProduto1}</span>
//   //                 <span>{post.preco}</span>,
//   //               </div>)}
//   //             ;
//   //         }
//   // render()