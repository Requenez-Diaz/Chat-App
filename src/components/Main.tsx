import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet} from 'react-native'
//Importaciones de Iconos
import { SimpleLineIcons } from '@expo/vector-icons'
import { Foundation } from '@expo/vector-icons'

import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Body from './Body';

const Main = () => {
    return (
        <View>
            <StatusBar style='light' />
            <View style={styles.header}>
                <Ionicons style={styles.back} name="arrow-back" size={35} color="gray" />
                <SimpleLineIcons name='bell' size={35} color='gray' />
                <FontAwesome5 name='user' size={35} color='gray' />
                <Foundation name="list" size={35} color="gray" />
            </View>
            <View>
                <Body></Body>
            </View>
            <View style={styles.footer}>

                <FontAwesome name="home" size={52} color="gray" />

                <MaterialIcons name="featured-play-list" size={52} color="gray" />

                <FontAwesome5 name="book-open" size={52} color="gray" />

                <Ionicons name="people" size={52} color="gray" />

                <Fontisto name="favorite" size={52} color="gray" />
            </View>
        </View>

    )
}

export default Main;

const styles = StyleSheet.create({
    header: {
        paddingVertical: 40,
        paddingHorizontal: 30,
        backgroundColor: '#28333F',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '60%',

    },
    footer: {
        backgroundColor: '#28333F',
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        height: 70,
    },
    back: {
        position: "absolute",
        color: 'gray',
        top:35,
        left: 40,
        zIndex: 2,
        fontSize:50,

    }

})