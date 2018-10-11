import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            board: [['', '', 'Z', '', 'Z'], ['', '', 'Z', '', 'Z'], ['', '', 'Z', '', ''], ['Z', 'Z', '', 'Z', 'Z'], ['', '', '', '', '']],
            ships: [
                [[0, 2], [1, 2], [2, 2]],
                [[0, 4], [1, 4]],
                [[3, 0], [3, 1]],
                [[3, 3], [4, 3]]
            ],
            shot: 6,
            hampir: 0,
            rusak: 0
        }
    }

    playGame = (row, col) => {
        let card = this.state.board

        if (this.state.shot === 0) {
            // alert('Game Over :(')
            // this.props.navigation.navigate('Finish')
        } else {
            if (card[row][col] === 'Z') {
                card[row][col] = 'O'
                this.setState({
                    board: card,
                    shot: this.state.shot - 1,
                    hampir: this.state.hampir+1
                })
                alert('Masuk Pak Eko')
            } else if (card[row][col] === '') {
                card[row][col] = 'X'
                this.setState({
                    board: card,
                    shot: this.state.shot - 1
                })
                alert('Gak Masuk Pak Eko')
            }
        }
    }

    componentDidUpdate() {
        if (this.state.shot === 0) {
            alert('Game Over :(')
            this.props.navigation.navigate('Finish')
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: 'brown', height: 700 }}>
                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
                    {
                        this.state.board.map((list, indexI) => {
                            return (
                                <View key={indexI}>
                                    {
                                        list.map((card, indexJ) => {
                                            return (
                                                card == '' || card == 'Z' ? (
                                                    <TouchableOpacity onPress={() => this.playGame(indexI, indexJ)} style={{ width: 70, height: 80, borderWidth: 1, flexDirection: 'row' }}>
                                                        <Image
                                                            source={{ uri: `https://static.vecteezy.com/system/resources/previews/000/061/981/non_2x/vector-comic-tsunami-wave-face.jpg` }}
                                                            style={{ height: 78, width: 68 }} />
                                                    </TouchableOpacity>
                                                ) :
                                                    <View style={{ width: 70, height: 80, borderWidth: 1, borderColor: 'white', flexDirection: 'row' }}>
                                                        <Text style={{ color: 'white', fontSize: 50, paddingHorizontal: 15, paddingVertical: 10 }}>{card}</Text>
                                                    </View>
                                            )
                                        })
                                    }
                                </View>
                            )
                        })
                    }
                </View>
                <View style={{ backgroundColor: 'brown', height: 100, marginTop: 100, width: 350, marginLeft: 12 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Kapal Sekarat</Text>
                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Kapal Rusak</Text>
                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Sisa Tembakan</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 10 }}>
                        <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>{ this.state.hampir }</Text>
                        <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>{ this.state.rusak }</Text>
                        <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>{this.state.shot}</Text>
                    </View>
                </View>
            </View>
        )
    }
}