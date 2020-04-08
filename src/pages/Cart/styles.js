import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const List = styled.FlatList`
    padding: 5px;
`;

export const ProductDetail = styled.View.attrs({
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
})`
    flex: 1;
    height: 150px;
    padding: 10px;
    flex-direction: row;

    margin-top: 5px;
    background: #fff;
`;

export const ProductImage = styled.Image`
    height: 100px;
    width: 100px;
`;
export const ProductInfo = styled.View`
    flex: 1;

    margin-left: 10px;
`;
export const ProductTitle = styled.Text`
    font-family: open-sans-bold;
    font-size: 18px;
    margin-bottom: 3px;
    color: #89c085;
`;

export const ContainerCod = styled.View.attrs({
    borderColor: '#89c085',
    borderLeftWidth: 2,
    borderRadius: 2,
})`
    flex-direction: row;
    justify-content: space-between;
`;
export const ProductCod = styled.Text`
    font-size: 9px;
    color: #333;
`;

export const ProductCategory = styled.Text`
    font-size: 12px;
    margin-bottom: 3px;
    color: #1576b6;
    font-family: open-sans-bold;
`;

export const ProductPrice = styled.Text`
    margin-top: auto;
    font-family: open-sans-bold;
    font-size: 25px;
    color: #333;
`;

export const ProductMaker = styled.Text`
    font-size: 14px;
    margin-bottom: 2px;
    color: #333;
    font-weight: bold;
`;
export const ContainerFooter = styled.View`
    margin-top: auto;
    flex-direction: row;
    justify-content: space-between;
`;
export const ContainerButton = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const AddButton = styled.TouchableOpacity``;
export const SubButton = styled.TouchableOpacity``;
export const Quant = styled.Text`
    font-size: 25px;
    color: #a0a0a0;
    line-height: 25px;

    padding-left: 5px;
    padding-right: 5px;
`;

export const ContainerCheckout = styled.View.attrs({
    shadowColor: '#000',
    shadowOffset: {
        width: 1,
        height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1.41,

    elevation: 2,
})`
    height: 200px;
    background: #fff;
    opacity: 0.8;
    padding: 10px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const CheckoutContainerTitle = styled.Text`
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 16px;
    font-family: open-sans;
    color: #333;
`;
export const CheckoutRow = styled.View.attrs({
    borderColor: '#a0a0a0',
})`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 8px;
`;
export const CheckoutTitle = styled.Text``;
export const CheckoutValue = styled.Text``;
export const CheckoutTotalRow = styled.View`
    margin-top: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const CheckoutTotal = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #1567;
`;
export const CheckoutButton = styled.TouchableOpacity``;
export const CheckoutButtonText = styled.Text`
    padding: 10px;

    color: #fff;
    font-size: 16px;
    line-height: 20px;
    background: #89c085;
    font-weight: bold;
`;
