import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ListBox from '../components/ListBox'


const HomePage = () => {

    const [productList, setProductList] = useState([])

    //get data from backend and set it to useState hook
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((value) => setProductList(value.data))
    }, [])





    return (
        <View style={styles.container}>
            <Text style={styles.listOfProducts}>List of Products</Text>

            <View style={styles.flatListContainer}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={productList}
                    keyExtractor={(item) => item.id} // If there is no "id" in API data, you can use "index" prop like this => keyExtractor={(item, index) => index}
                    renderItem={({ item }) => <ListBox ProductInfo={item} />} //rendering outside by using a component(ListBox) with props(ProductInfo)
                />
            </View>
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    listOfProducts: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'tomato'
    },

    flatListContainer: {
        borderRadius: 10,
        width: "80%",
        height: 600,
    }
})