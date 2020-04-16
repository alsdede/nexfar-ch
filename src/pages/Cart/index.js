import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import api from '~/serivces/api';
import { formatPrice } from '~/utils/format';

import {
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
    ContainerCheckout,
    CheckoutRow,
    CheckoutContainerTitle,
    CheckoutTitle,
    CheckoutButton,
    CheckoutValue,
    CheckoutButtonText,
    CheckoutTotalRow,
    CheckoutTotal,
} from './styles';
// import * as CartActions from '~/store/modules/cart/actions';

export default function Cart() {
    const cart = useSelector(state =>
        state.cart.map(product => ({
            ...product,
            subtotal: formatPrice(product.price * product.amount),
        }))
    );

    const dispatch = useDispatch();
    // const [cart, setCart] = useState([]);
    // useEffect(() => {
    //     async function loadProducts() {
    //         const response = await api.get('cart');

    //         const data = response.data.items.map(product => ({
    //             ...product,
    //             priceFormatted: formatPrice(product.price),
    //         }));

    //         setCart(data);
    //     }
    //     loadProducts();
    // }, []);
    return (
        <Container>
            {/* {/* <Text style={{ color: '#156', fontSize: 16 }}>
                TOTAL DE PRODUTOS: {products.length}
            </Text> */}
            <List
                data={cart}
                keyExtractor={item => String(item.product.sku)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <ProductDetail>
                        <ProductImage source={{ uri: item.product.imageURL }} />
                        <ProductInfo>
                            <ProductCod>Cod. {item.product.sku}</ProductCod>
                            <ProductTitle numberOfLines={2}>
                                {item.product.name}
                            </ProductTitle>
                            <ContainerCod>
                                <ProductMaker>
                                    {item.product.maker}
                                </ProductMaker>
                                <ProductCategory>
                                    {item.product.category}
                                </ProductCategory>
                            </ContainerCod>

                            <ContainerFooter>
                                <ProductPrice>
                                    R${item.product.price}
                                </ProductPrice>
                                <ContainerButton>
                                    <AddButton>
                                        <Ionicons
                                            name="ios-add-circle-outline"
                                            size={30}
                                            color="#89c085"
                                        />
                                    </AddButton>
                                    <Quant>{item.quantity}</Quant>
                                    <SubButton>
                                        <Ionicons
                                            name="ios-remove-circle-outline"
                                            size={30}
                                            color="#89c085"
                                        />
                                    </SubButton>
                                </ContainerButton>
                            </ContainerFooter>
                        </ProductInfo>
                    </ProductDetail>
                )}
            />
            <ContainerCheckout>
                <CheckoutContainerTitle>
                    Resumo do Pedido
                </CheckoutContainerTitle>

                <CheckoutRow>
                    <CheckoutTitle>Subtotal</CheckoutTitle>
                    <CheckoutValue>R$1.560,00</CheckoutValue>
                </CheckoutRow>

                <CheckoutRow>
                    <CheckoutTitle>Desconto</CheckoutTitle>
                    <CheckoutValue>-R$60,00</CheckoutValue>
                </CheckoutRow>

                <CheckoutRow>
                    <CheckoutTitle>Entrega</CheckoutTitle>
                    <CheckoutValue>R$0,00</CheckoutValue>
                </CheckoutRow>

                <CheckoutTotalRow>
                    <CheckoutButton>
                        <CheckoutButtonText>FECHAR PEDIDO</CheckoutButtonText>
                    </CheckoutButton>
                    <CheckoutTotal>TOTAL R$1.500,00</CheckoutTotal>
                </CheckoutTotalRow>
            </ContainerCheckout>
        </Container>
    );
}

Cart.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'Carrinho',
        headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Products')}>
                <Feather
                    name="arrow-left"
                    size={30}
                    style={{ color: '#89c085' }}
                />
            </TouchableOpacity>
        ),
    };
};
