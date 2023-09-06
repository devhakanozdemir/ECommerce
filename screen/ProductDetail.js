import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ProductDetail = ({ navigation, route }) => {


    /* 
         a practical option of         
            // get main data from HomePage with navigation-route-params
                <Text>{route.params.ProductDatas.title}</Text>
                <Text>{route.params.ProductDatas.price}</Text> 
    */

    const { title, price, image } = route.params.ProductDatas

    return (
        <View style={styles.container}>
            <Image
                style={{ width: 300, height: 300, marginBottom: 80 }}
                source={{ uri: `${image}` }} />
            <Text style={styles.ProductName}>{title}</Text>
            <Text style={styles.ProductPrice}>{price}</Text>
        </View>

    )
}

export default ProductDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8F6F4',
    },
    ProductName: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        padding: 20,
    },
    ProductPrice: {
        paddingTop: 20,
        fontSize: 22,
        color: 'red',
        fontWeight: 'bold',
    },
})