import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
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
} from './styles';

export default function Products() {
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
            <Text style={{ color: '#156', fontSize: 16 }}>
                TOTAL DE PRODUTOS: {products.length}
            </Text>
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
        </Container>
    );
}
