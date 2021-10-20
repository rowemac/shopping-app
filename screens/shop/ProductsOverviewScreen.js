import React from 'react'; 
import { FlatList } from 'react-native'; 
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../../store/actions/cart';

import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts); 
    const dispatch = useDispatch(); 

    return (
        <FlatList 
            data={products} 
            keyExtractor={item => item.id} 
            renderItem={itemData => (
                <ProductItem 
                    image={itemData.item.imageUrl} 
                    title={itemData.item.title} 
                    price={itemData.item.price} 
                    onViewDetail={() => {
                        props.navigation.navigate('ProductDetail', {  // or ({routeName: 'Product Detail'})
                            productId: itemData.item.id, 
                            productTitle: itemData.item.title
                        });
                    }} 
                    onAddToCart={() => {
                        dispatch(cartActions.addToCart(itemData.item))
                    }}
                />
            )} 
        />
    );
}; 

ProductsOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
}

export default ProductsOverviewScreen; 
