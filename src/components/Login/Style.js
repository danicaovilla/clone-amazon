import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        // paddingHorizontal: 35,
        backgroundColor: 'white'
    },
    image: {
        width: 220,
        height: 170,
        // marginBottom: 5,
    },
    destaque: {
        marginBottom: 10,
        fontWeight: '700',
        paddingBottom: 5,
        color: 'black',
        fontSize: 24,
        fontFamily: 'Euclid Extra Bold'
    },
    descricao: {
        paddingBottom: 10,
        color: 'black',
        fontSize: 18,
        right: 65,
        // fontFamily: 'Euclid Extra Bold'
    },
    descricaoOrdenar: {
        paddingBottom: 10,
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        // fontFamily: 'Euclid Extra Bold'
    },
    buttonCliente: {
        width: '90%',
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#dabd6f',
        borderRadius: 5,
        backgroundColor: '#f2cf6b'
    },
    button: {
        width: '90%',
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#b5b5bd',
        borderRadius: 5,
        backgroundColor: '#eff0f4'
    },
    buttonTexto: {
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
    },
});

export default styles;