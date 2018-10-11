import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class Finish extends React.Component {
    render() {
        return (
            <View style={{ flex: 3, alignItems: 'center', backgroundColor: 'brown' }}>
                <Text style={{ fontSize: 50, color: 'white', marginTop: 200, marginBottom: 15, fontWeight: 'bold' }}>Game Over!</Text>
                <Image
                    source={{ uri: `http://wikiapk.com/wp-content/uploads/2017/04/16815_featured.png` }}
                    style={{ width: 100, height: 100, marginBottom: 20 }} />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Welcome')} style={{ borderRadius: 5, width: 200, height: 40, backgroundColor: 'white' }}>
                    <Text style={{ textAlign: 'center', paddingVertical: 10, fontWeight: 'bold' }}>Play Again </Text>
                </TouchableOpacity>
            </View>
        )
    }
}