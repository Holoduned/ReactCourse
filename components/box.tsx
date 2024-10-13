import React from 'react';
import { View, Text } from 'react-native';

export const CustomComponent1 = () => (
    <View style={{ flex: 1, justifyContent: 'center' }}>
        <Box radius ={10} width={100} height={100} color='red'></Box>
        <Box radius ={15} width={100} height={100} color='green'></Box>
        <Box radius ={10} width={100} height={100} color='blue'></Box>
    </View>
);

export const Box = (props:any) => (
    <View style={{
        borderRadius: props.radius, width: props.width, height: props.height, backgroundColor:
            props.color
    }}
    />
);