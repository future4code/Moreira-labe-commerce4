import React from 'react'
import styled from 'styled-components';
import ShoppingCartItem from './ShoppingCartItem';



const ShoppingCartContainer = styled.div`
    border: 1px solid black;
`

const CartListContainer = styled.div`
    display:grid;
    gap: 4px;
    padding: 8px;
`


class ShoppingCart extends React.Component { 

     getTotalValue = () => {  //identificar onde estão e quais nomes possuem
        let totalValue = 0

         for (let product of this.props.productsInCart){  
            totalValue += product.value * product.quantity
         }
        return totalValue
    } 

    render() {
        return <ShoppingCartContainer>
            <h3>Carrinho:</h3>
            <CartListContainer>
                {this.props.productsInCart.map((product)=>{       /* ao descomentar quebra aqui */
                    return <ShoppingCartItem
                                cartItem = {product}  //cartItem???
                                onRemoveProductFromCart = {this.props.onRemoveProductFromCart}
                            /> 
                })}

                <ShoppingCartItem/>

            
            </CartListContainer>                
            
            {/* <p> Valor total: R$ {this.getTotalValue()},00</p> */}
            
            
        </ShoppingCartContainer>
    }

}

export default ShoppingCart;