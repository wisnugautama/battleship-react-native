import React from 'react';
import { View,Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="rocket" size={30} color="#900" />)

export default class Welcome extends React.Component {
    login = () => {
        this.props.navigation.navigate('Game')
    }

    render () {
        return (
            <View style={ Style.container }>
            <Image 
            source={{ uri: `http://wikiapk.com/wp-content/uploads/2017/04/16815_featured.png` }}
            style={{ width: 100, height: 100, marginBottom: 20, marginTop: 200 }} />
                <Text style={{ color: 'white', marginBottom: 20, fontSize: 40, fontWeight: 'bold' }}>BattleSIP</Text>
                <TouchableOpacity onPress={() => this.login()} style={{ borderRadius: 5, width: 200, height: 40 , backgroundColor: 'white'}}>
                    <Text style={{ textAlign: 'center', paddingVertical: 10, fontWeight: 'bold'}}>Play Game!</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const Style = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        // justifyContent: 'center',
        backgroundColor: 'brown'
    }, 
    
})