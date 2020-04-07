import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Routes from '~/routes';

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./src/assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./src/assets/fonts/OpenSans-Bold.ttf'),
        // eslint-disable-next-line prettier/prettier
        "tahoma": require("./src/assets/fonts/Tahoma.ttf"),
        'tahoma-bold': require('./src/assets/fonts/Tahoma-Bold.ttf'),
        // eslint-disable-next-line prettier/prettier
        "din": require("./src/assets/fonts/DIN.ttf")
    });
};

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => {
                    setFontLoaded(true);
                }}
            />
        );
    }
    return <Routes />;
}
