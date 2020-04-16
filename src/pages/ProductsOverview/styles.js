import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    numColumns: 2,
})`
    margin-top: 10px;
    padding: 0 6px;
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
    background: #fff;
    padding: 5px;
    flex: 1;

    margin: 0 2px 10px;
`;

export const ProductImage = styled.Image`
    height: 150px;
    width: 150px;
`;
export const ProductInfo = styled.View`
    flex: 1;
`;
export const ProductTitle = styled.Text`
    font-family: open-sans-bold;
    font-size: 20px;

    color: #89c085;
`;

export const ContainerCod = styled.View.attrs({
    borderColor: '#89c085',
    borderLeftWidth: 2,
    borderRadius: 2,
})`
    justify-content: space-between;
    margin-top: 5px;
    margin-bottom: auto;
`;
export const ProductCod = styled.Text`
    font-size: 9px;
    color: #333;
`;

export const ProductCategory = styled.Text`
    color: #333d88;
    font-size: 12px;
    font-weight: bold;
`;

export const ProductPrice = styled.Text`
    font-size: 20px;
    font-weight: 600;
    margin-right: 5px;
    color: #333;
`;

export const ProductMaker = styled.Text`
    font-size: 12px;
    color: #444;
`;
export const ContainerFooter = styled.View.attrs({})`
    margin-top: 15px;
    justify-content: space-between;
`;
export const ContainerButton = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const AddButton = styled.TouchableOpacity``;
export const SubButton = styled.TouchableOpacity``;
export const Quant = styled.Text`
    font-size: 18px;

    margin-left: 5px;
    margin-right: 5px;
`;

export const Alert = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 8px;
    margin-left: 5px;
`;
