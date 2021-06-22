import React, { useEffect, useState } from 'react';

import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { styles } from './styles';
import { getProductsList } from '../../services';

export default function ProductListView() {
    const [products, setProducts] = useState(Object);

    useEffect(() => {
        getProductsList().then((items) => setProducts(items));
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(product) => product.id.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.card}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>R$ {item.price.toFixed(2).replace('.', ',')}</Text>
                        <Text>Fabricante: {item.factory.name}</Text>
                        <Text>Quantidade em Estoque: {item.amount}</Text>
                    </View>
                )}
            />
        </View>
    );
}