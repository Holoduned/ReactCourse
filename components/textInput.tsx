import { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

export const TextInput1 = () => {
    const [name, setName] = useState('');
    return (
        <View style={{
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
            padding: 16,
        }}>
            <Text style={{ marginVertical: 16 }}>
                {name ? `Hi ${name}!` : 'What is your name?'}
            </Text>
            <TextInput
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                onChangeText={text => setName(text)}
            />
        </View>
    );
};

export const TextInput2 = () => {
    const [name, setName] = useState('');
    const [displayName, setDisplayName] = useState('');
    return (
        <View style={{
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
            padding: 16,
        }}>
            <Text style={{ marginVertical: 16 }}>
                {`Hi ${displayName}!`}
            </Text>
            <TextInput
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                onChangeText={text => setName(text)}
            />
            <Button
                title='Press me'
                onPress={() => {
                    setDisplayName(name);
                }}
            />
        </View>
    );
};

export const TextInput3 = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(Boolean);
    return (
        <View style={{
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
            padding: 16,
        }}>
            <Text style={ isLoggedIn ? styles.visible : styles.invisible}>Welcome</Text>
            <View style={ isLoggedIn ? styles.invisible : styles.visible}
            >
                <TextInput
                    style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                    placeholder="логин"
                    onChangeText={text => setLogin(text)}
                />
                <TextInput
                    style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                    placeholder="пароль"
                    onChangeText={text => setPassword(text)}
                />
                <Button
                    title='Voiti'
                    onPress={() => {
                        if (login.length < 5 || login.length > 10) {
                            Alert.alert('Ошибка логина', 'длина')
                            return
                        }
                        if (password.length < 5 || password.length > 32) {
                            Alert.alert('Ошибка пароля, маленький')
                            return
                        }
                        setLoggedIn(true)
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    visible:{
        display:'flex'
    },
    invisible:{
        display:'none'
    }
})