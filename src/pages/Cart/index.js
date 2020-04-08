import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import api from '~/serivces/api';
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

export default function Cart() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    async function loadProducts() {
        // if (loading) {
        //     return;
        // }

        // setLoading(true);
        const response = await api.get('/product');

        setProducts(response.data);
    }

    useEffect(() => {
        loadProducts();
    }, []);
    return (
        <Container>
            {/* <Text style={{ color: '#156', fontSize: 16 }}>
                TOTAL DE PRODUTOS: {products.length}
            </Text> */}
            <List
                data={products}
                keyExtractor={product => String(product.sku)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: product }) => (
                    <ProductDetail>
                        <ProductImage source={{ uri: product.imageURL }} />
                        <ProductInfo>
                            <ProductCod>Cod. {product.sku}</ProductCod>
                            <ProductTitle numberOfLines={2}>
                                {product.name}
                            </ProductTitle>
                            <ContainerCod>
                                <ProductMaker>
                                    {product.maker.toUpperCase()}
                                </ProductMaker>
                                <ProductCategory>
                                    {product.category}
                                </ProductCategory>
                            </ContainerCod>

                            <ContainerFooter>
                                <ProductPrice>R${product.price}</ProductPrice>
                                <ContainerButton>
                                    <AddButton>
                                        <Ionicons
                                            name="ios-add-circle-outline"
                                            size={30}
                                            color="#89c085"
                                        />
                                    </AddButton>
                                    <Quant>5</Quant>
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
