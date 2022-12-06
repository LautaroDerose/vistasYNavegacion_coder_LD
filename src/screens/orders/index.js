import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import { OrderItem } from "../../components";
import { ORDERS } from "../../constants/data";

const Orders = ({ navigation }) => {

    const onDelete = (id) => {
        console.warn('Delete', id);
    };

    const renderItem = ({item}) => <OrderItem item={item} onDelete={onDelete}/>

    return (
        <View style={styles.container}>
            <FlatList data={ORDERS} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
        </View>
    )
};

export default Orders;