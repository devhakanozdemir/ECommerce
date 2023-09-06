import { StyleSheet, Text, View, Pressable, } from 'react-native'
import React from 'react'

const ListBox = (props) => {
    return (
        <Pressable
            style={styles.container}
            onPress={props.handleOnPress}
        >
            <Text style={styles.ProductName}>{props.ProductInfo.title}</Text>
            <Text style={styles.ProductPrice}>{props.ProductInfo.price}</Text>
            <Text style={styles.ProductCategory}>{props.ProductInfo.category}</Text>
        </Pressable>
    )
}

export default ListBox

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D2E9E9',
        marginVertical: 5,
        paddingVertical: 15,
        borderRadius: 10,
        padding: 15,
        height: 120,
        justifyContent: 'center',
    },
    ProductName: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    ProductPrice: {
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    ProductCategory: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
})