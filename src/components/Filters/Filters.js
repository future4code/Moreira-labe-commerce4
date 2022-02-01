import React from "react";

class Filters extends React.Component {
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
