import React from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Body = () => {
    return (
        <ScrollView>
            <View>
                <View style={style.addComment} >
                    <View>
                        <FontAwesome5 style={style.inputsIcons} name="user-circle" size={40} color="black" />
                        <Ionicons style={style.inputsAdd} name="md-send" size={24} color="gray" />
                        <Entypo style={style.inputsAdd2} name="emoji-happy" size={24} color="black" />
                        <TextInput
                            style={style.inputs}
                            placeholder='Add comment...' />

                    </View>
                </View>
                <Text style={style.txt}>87 Comments</Text>
                <View>
                    <Text style={style.comment}>
                        Lorem ipsum dolor sit, amet 😄😄😄 adipisicing elit.
                        Nihil 😄😄 provident distinctio aut. Inventore, 😄😄
                        nihil. Repudiandae ex hic 😄😄 vero esse, aliquid nobis
                        tenetur quasi laboriosam! Aliquid, doloremque impedit!
                    </Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
                <View>
                    <Text>Hola</Text>
                </View>
            </View>

        </ScrollView>
    )
}

export default Body;

const style = StyleSheet.create({
    txt: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginLeft: 20,
    },
    inputsAdd: {
        position: "absolute",
        color: "#A2AABB",
        top: 20,
        left: 390,
        zIndex: 2,
        fontSize: 22,

    },
    inputsAdd2: {
        position: "absolute",
        color: "#A2AABB",
        top: 20,
        left: 350,
        zIndex: 2,
        fontSize: 22,
    },
    inputsIcons: {
        position: "absolute",
        color: "#A2AABB",
        top: 4,
        right: 410,
        zIndex: 2,
        fontSize: 50,

    },
    addComment: {
        marginTop: 30
    },
    inputs: {
        marginTop: 1,
        backgroundColor: '#4B576B',
        color: '#ABA6B1',
        borderWidth: 1,
        padding: 15,
        borderRadius: 15,
        width: '70%',
        marginHorizontal: '20%',
        margin: 10,
        textAlign: "left",
        fontSize: 22,
        fontWeight: "bold",
        borderColor: '#4B576B',
    },
    comment: {

    }

})