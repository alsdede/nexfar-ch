import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { Text, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import SearchBar from '~/components/SearchBar';
import { formatPrice } from '~/utils/format';
import api from '~/serivces/api';

import * as CartActions from '~/store/modules/cart/actions';

import {
    Alert,
    Container,
    List,
    ProductDetail,
    ProductInfo,
    ProductTitle,
    ProductCategory,
    ProductCod,
    ProductPrice,
    ProductMaker,
    ProductImage,
    ContainerCod,
    ContainerFooter,
    ContainerButton,
    AddButton,
    SubButton,
    Quant,
} from './styles';
// import * as CartActions from '~/store/modules/cart/actions';

function Products() {
    const [products, setProducts] = useState([]);
    const amount = useSelector(state =>
        state.cart.reduce((sumAmount, product) => {
            sumAmount[product.id] = product.amount;
            return sumAmount;
        }, {})
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: '@cart/FETCH_CART' });
        async function loadProducts() {
            const response = await api.get('product');

            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price),
            }));

            setProducts(data);
        }
        loadProducts();
    }, []);

    function handleAddProduct(sku) {
        dispatch(CartActions.addToCartRequest(sku));
    }
    return (
        <Container>
            <SearchBar />
            <Text style={{ color: '#156', fontSize: 12, marginLeft: 10 }}>
                TOTAL DE PRODUTOS: {products.length}
            </Text>
            <List
                data={products}
                keyExtractor={product => String(product.sku)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: product }) => (
                    <ProductDetail>
                        <Alert>
                            <Feather
                                name="alert-triangle"
                                size={16}
                                color="red"
                            />
                            <Text
                                style={{
                                    color: 'red',
                                    marginLeft: 5,
                                    fontSize: 12,
                                }}
                            >
                                Últimas unidades
                            </Text>
                        </Alert>
                        <ProductImage source={{ uri: product.imageURL }} />
                        <ProductInfo>
                            <ProductCod>Cod. {product.sku}</ProductCod>
                            <ProductCategory>
                                {product.category}
                            </ProductCategory>
                            <ProductTitle numberOfLines={2}>
                                {product.name}
                            </ProductTitle>
                            <ContainerCod>
                                <ProductMaker>
                                    {product.maker.toUpperCase()}
                                </ProductMaker>
                            </ContainerCod>

                            <ContainerFooter>
                                <ContainerButton>
                                    <ProductPrice>
                                        {product.priceFormatted}
                                    </ProductPrice>
                                    <AddButton
                                        onClick={() =>
                                            handleAddProduct(product.sku)
                                        }
                                    >
                                        <Ionicons
                                            name="ios-add-circle-outline"
                                            size={28}
                                            color="#89c085"
                                        />
                                    </AddButton>
                                    <Quant>{amount[product.sku] || 0}</Quant>
                                    <SubButton>
                                        <Ionicons
                                            name="ios-remove-circle-outline"
                                            size={28}
                                            color="#89c085"
                                        />
                                    </SubButton>
                                </ContainerButton>
                            </ContainerFooter>
                        </ProductInfo>
                    </ProductDetail>
                )}
            />
        </Container>
    );
}

Products.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'Produtos',
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Feather
                    name="shopping-bag"
                    size={30}
                    style={{ color: '#89c085' }}
                />
            </TouchableOpacity>
        ),
    };
};

export default connect()(Products);
