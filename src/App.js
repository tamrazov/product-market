import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './static/css/App.css';

import Header from './components/Header';
import Products from './pages/Products';
import ShoppingCart from './pages/ShoppingCart'

function App() {
	return (
		<Router>
			<div className="container App">
				<Header />
				<Switch>
					<Route exact path="/" render={() => {
						return <Redirect to="/products" />
					}} />
					<Route path="/products" component={Products} />
					<Route path="/shoppingcart" component={ShoppingCart} />
				</Switch>
			</div>
		</Router> 
	);
}

export default App;
