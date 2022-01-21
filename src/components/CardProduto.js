import React from "react";
import styled from "styled-components";


const CardProdutos = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 276px;
  border: 2px solid blueviolet;
  margin: 10px 5px;
`;
const CardProdutoFoto = styled.img`
  width: 100%;
  height: 160px;
`;

function CardProduto(props) {
  
  return (
    <div>
      <CardProdutos key={props.id}>
        <div>
          <CardProdutoFoto src={props.foto} alt={"Imagem do produto"} />
          <p>{props.produto}</p>
          <p>{props.preco}</p>
        </div>
        <button>Adicionar ao carrinho</button>
        {/* onClick={this.props.addProduto} */}
      </CardProdutos>
    </div>
  );
}
export default CardProduto;
