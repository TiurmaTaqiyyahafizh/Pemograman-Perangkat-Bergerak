import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

class Profil2 extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View style={{margin: 15}}>
                <View style={{alignItems: 'center',}}>
                    <Image source={{ uri:"https://images.bisnis.com/posts/2020/10/09/1302971/kerja-ifahto.jpg"}} style={{
                        width : 200, 
                        height: 200, 
                        borderRadius: 100,
                    }}/>
                </View>
                <Text style={{textAlign: 'justify', 
                    fontSize: 16, 
                    paddingLeft: 10, 
                    paddingRight: 10}}>NIM: 232310019</Text>
                <Text style={{textAlign: 'justify', 
                    fontSize: 16, 
                    paddingLeft: 10, 
                    paddingRight: 10}}>Nama: Tiurma Taqiyyahafizh</Text>
                <Text style={{textAlign: 'justify', 
                    fontSize: 16, 
                    paddingLeft: 10, 
                    paddingRight: 10}}>Jurusan: S1 Teknologi Informasi</Text>
                <Text style={{textAlign: 'justify', 
                    fontSize: 16, 
                    paddingLeft: 10, 
                    paddingRight: 10}}>Umur: 19</Text>
                <Text style={{textAlign: 'justify', 
                    fontSize: 16, 
                    paddingLeft: 10, 
                    paddingRight: 10}}>Hobi: Tidur</Text>
            </View>
        );
    }
}

export default Profil2;
