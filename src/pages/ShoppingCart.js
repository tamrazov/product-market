import React from 'react';
import {connect} from 'react-redux'
import { deleteToCartAction } from './../actions';

import './../static/css/shopCart.css'

class ShoppingCart extends React.Component {
  render() {

    const productInCart = this.props.productsInCart;

    var allPrice = productInCart.reduce(function(sum, current) {
      return sum + current.price;
    }, 0);

    const shopCartSize = productInCart.length;
    const product = productInCart.map( (el, index) => {
      return (
        <tbody>
          <tr key={ index }>
            <th> { el.name } </th>
            <th> { el.price } </th>
            <th><button onClick={ () => this.props.deleteToCartAction(index) } className="btn"><i className="far fa-times-circle"></i></button></th>
          </tr>
        </tbody>
      )
    });

    if (shopCartSize !==0) {
      return(
        <div className="container-table">
          <table className="table table-products-in-cart">
            <thead>
              <tr>
                <th scope="col">название</th>
                  <th> цена </th>
                  <th> удалить </th>
              </tr>
            </thead>
            {product}
            <tbody>
              <tr>
                <th>
                  Итого: {allPrice}
                </th>
              </tr>
            </tbody>
          </table>
        </div> 
      )
    } 
    return (
      <div>
        Корзина пуста
      </div>
    )
  };
};

const mapStateToProps = (state) => ({
  productsInCart: state.reducerAddDeleteToCart.productsIn
})

export default connect (mapStateToProps, {deleteToCartAction})(ShoppingCart);
