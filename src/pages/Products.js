import React from 'react';
import { connect } from 'react-redux';
import {fetchProducts , addToCartAction} from './../actions';

import './../static/css/product.css';

class Products extends React.Component {

  componentDidMount () {
    this.props.fetchProducts();
  };

	render () {
    const product = this.props.products.map( el => {
      return (
        <div 
        key={el.id}
        className="container-product"
        >
          <img className="product-img" src={ el.image } alt="img" />
          <p className="product-title"> {el.name} </p>
          <br />
          <p className="product-price"> {el.price} &#8381; </p>
          <button className="btn btn-success button-add" onClick={ () => this.props.addToCartAction(el) }> Добавить в корзину </button>
        </div>
      );
    });
    
		return(
			<div className="row container-products">
        { product }
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
  products: state.reducerFetchProducts.products
});

export default connect ( mapStateToProps, { fetchProducts, addToCartAction } )(Products);
