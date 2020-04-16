import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ProductsOverview from '~/pages/ProductsOverview';
import Cart from '~/pages/Cart';

const defaultStackNavOptions = {
    headerTintColor: '#89c085',
    headerBackTitleVisible: false,

    headerStyle: {
        backgroundColor: '#FFF',
    },
};
const Routes = createStackNavigator(
    {
        Products: {
            screen: ProductsOverview,

            navigationOptions: {},
        },
        Cart: {
            screen: Cart,
            navigationOptions: {},
        },
    },
    {
        defaultNavigationOptions: defaultStackNavOptions,
    }
);

export default createAppContainer(Routes);
