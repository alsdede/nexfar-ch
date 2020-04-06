import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ProductsOverview from '~/pages/ProductsOverview';
import Cart from '~/pages/Cart';

const defaultStackNavOptions = {
    headerTintColor: '#fff',
    headerBackTitleVisible: false,
    headerShow: false,
    headerStyle: {
        backgroundColor: '#FFF',
    },
};
const Routes = createStackNavigator(
    {
        Products: {
            screen: ProductsOverview,

            navigationOptions: {
                title: 'Movies',
            },
        },
        Cart: {
            screen: Cart,
            navigationOptions: {
                title: 'Movie Details',
            },
        },
    },
    {
        defaultNavigationOptions: defaultStackNavOptions,
    }
);

export default createAppContainer(Routes);
