import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';

import Styles from './Style';

const Login = ({ navigation }) => {
    return (
        <>
            <View style={Styles.container}>
                <Image
                    style={Styles.image}
                    source={require('./../../../assets/images/yt-music-logo-login.png')}
                />
                <Text style={Styles.destaque}>Entre no mundo da música</Text>
                <Text style={Styles.descricao}>Faça login para ver playlists, álbuns e artistas e fazer streaming desse conteúdo no YouTube Music</Text>
                <TouchableHighlight style={Styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={Styles.buttonTexto}>FAZER LOGIN</Text>
                </TouchableHighlight>
                <Text style={Styles.link}>ARQUIVOS DO DISPOSITIVO</Text>
            </View>
        </>
    );
};

export default Login;
