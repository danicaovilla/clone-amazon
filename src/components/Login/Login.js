import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';

import Styles from './Style';

const Login = ({ navigation }) => {
    return (
        <>
            <View style={Styles.container}>
                <Image
                    style={Styles.image}
                    source={require('./../../assets/imagens/logo-login.png')}
                />
                <Text style={Styles.destaque}>Faça login na sua conta</Text>
                <Text style={Styles.descricao}>Ver sua lista de desejos</Text>
                <Text style={Styles.descricaoOrdenar}>Encontrar e ordenar compras anteriores</Text>
                <Text style={Styles.descricao}>Rastreie suas compras</Text>
                <TouchableHighlight style={Styles.buttonCliente} onPress={() => navigation.navigate('Home')}>
                    <Text style={Styles.buttonTexto}>Já é um Cliente? Faça seu login</Text>
                </TouchableHighlight>
                <TouchableHighlight style={Styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={Styles.buttonTexto}>Novo na Amazon? Crie uma conta</Text>
                </TouchableHighlight>
                <TouchableHighlight style={Styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={Styles.buttonTexto}>Pular login</Text>
                </TouchableHighlight>
            </View>
        </>
    );
};

export default Login;
