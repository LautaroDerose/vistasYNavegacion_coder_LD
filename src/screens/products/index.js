import React from "react";
import { FlatList } from "react-native";
import { styles } from "./styles";
import { PRODUCTS } from "../../constants/data";
import { COLORS } from "../../constants/themes/colors";
import ProductItem from "../../components/product-item";

const Products = ({ navigation, route }) => {

    const { categoryId, color} = route.params;   

    const filteredProducts = PRODUCTS.filter(product => product.categoryId === categoryId);

    const onSelected = (item) => {  navigation.navigate('Product', { title: item.title, productId: item.id });    }
    
    const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} color={color}/>

    return (
        <FlatList
            data={filteredProducts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            styles={styles.container}
        />
    )
};

export default Products;