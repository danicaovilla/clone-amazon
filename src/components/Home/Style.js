import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    destaque: {
        paddingBottom: 20,
        color: '#ffffff',
        fontSize: 26,
        fontFamily: 'Euclid Extra Bold'
    },
    containerCapas: {
        flexDirection: 'row',
        marginBottom: 50
    },
    destaque: {
        width: 'auto',
        height: 280

    },
    boxDestaque: {
        width: '100%'

    },
    capa: {
        width: 185,
        height: 185,
        marginBottom: 5
    },
    boxCapa: {
        marginRight: 15
    },
    destaqueCapas: {
        marginBottom: 5,
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Euclid Extra Bold'
    },
    textoCapas: {
        color: '#999'
    }
});

export default styles;