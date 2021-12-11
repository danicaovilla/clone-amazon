import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#ccc'
    },
    subcontainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto: {
        color: '#999',
        fontSize: 12
    },
    icon: {
        color: 'black',
        fontSize: 26
    }
});

export default styles;
