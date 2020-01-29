import Axios from 'axios';

const apiUrl = 'https://appevent.ru/dev/task1/catalog';

export const fetchProducts = () => {
	return (dispatch) => {
		return Axios.get(apiUrl)
			.then( res => {
				dispatch(fetchProductSuccess(res))
			})
			.catch( err => {
				throw(err)
			});
	};
};

export const fetchProductSuccess = (res) => {
	return {
		type: 'FETCH_PRODUCTS',
		payload: res.data.items
	};
}; 

export const addToCartAction = (product) => {
	return {
		type: 'ADD_TOCART',
		payload: product
	};
};

export const deleteToCartAction = (productIndex) => {
	return {
		type: 'DELETE_TOCART',
		payload: productIndex
	};
};
