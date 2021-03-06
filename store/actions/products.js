export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export const fetchProducts = () => {
  return async dispatch => {
    // any async code you want can go here
    const response = await fetch(
      'https://rn-completeguide-shopping-app-default-rtdb.firebaseio.com/products.json',
      {
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          description,
          imageUrl,
          price
        })
      }
    );

    const resData = await response.json();
    dispatch({ type: SET_PRODUCTS, products: [] });
  };
};

export const deleteProduct = productId => {
  return { type: DELETE_PRODUCT, pid: productId };
};

export const createProduct = (title, description, imageUrl, price) => {
  return async dispatch => {
    // any async code you want can go here
    const response = await fetch(
      'https://rn-completeguide-shopping-app-default-rtdb.firebaseio.com/products.json'
    );
    const resData = await response.json();
    // console.log(resData);
    dispatch({ type: SET_PRODUCTS, products: [] });
  };
};

export const updateProduct = (id, title, description, imageUrl) => {
  return {
    type: UPDATE_PRODUCT,
    pid: id,
    productData: {
      title,
      description,
      imageUrl
    }
  };
};
