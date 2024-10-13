import { useState } from "react";
import { View, Text, Button } from "react-native";

export const ButtonText = () => {
    const [pressedCount, setPressedCount] = useState(0);
    const handlePress = () => {
        setPressedCount(pressedCount + 1);
    };
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ margin: 16 }}>
                {pressedCount > 0
                    ? `The button was pressed ${pressedCount} times!`
                    : 'The button isn\'t pressed yet'
                }
            </Text>

            <Button
                title='Press me'
                onPress={handlePress}
                disabled={pressedCount > 3}
            />
            <Button
                title='Clear'
                onPress={() => {
                    setPressedCount(0);
                }}
            />
        </View>
    );
}