import React from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

import '../static/css/header.css'

class Header extends React.Component {
	render() {
		const shopCartSize = this.props.productsInCart.length;

		function ShopButton() {
			if (shopCartSize !== 0) {
				return(
					<div>
						<Link to="/shoppingcart" className="button-call"> Оформить заказ </Link>
						<i className="fas fa-shopping-cart">&#160;{ shopCartSize }</i> 
					</div>
				)
			} 
			return (
				<div>
					<Link to="/shoppingcart">
						Корзина &#160;
					</Link>
					<i className="fas fa-shopping-cart">&#160;{ shopCartSize }</i>
				</div>
			)
		}

		return(
			<div className="row container-header">
				<div> logo </div>
				<div className="products">
					<Link to="/products">
						Товары
					</Link>
				</div>
				<div className="shopcart">
					<ShopButton />
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	productsInCart: state.reducerAddDeleteToCart.productsIn
})

export default connect (mapStateToProps)(Header);
