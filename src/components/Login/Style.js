import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
        paddingHorizontal: 35,
        backgroundColor: '#000'
    },
    image: {
        marginBottom: 40
    },
    destaque: {
        paddingBottom: 20,
        color: '#ffffff',
        fontSize: 24,
        fontFamily: 'Euclid Extra Bold'
    },
    descricao: {
        paddingBottom: 120,
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Euclid Extra Bold'
    },
    button: {
        marginBottom: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 3,
        backgroundColor: '#fff'
    },
    buttonTexto: {
        fontSize: 18,
        fontFamily: 'Euclid Extra'
    },
    link: {
        color: '#fff',
        fontFamily: 'Euclid Extra Bold'
    }
});

export default styles;