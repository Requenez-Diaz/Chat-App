import React from 'react'
import { View, Text, ScrollView, TextInput,StyleSheet} from 'react-native'
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

                <View style={style.people}>
                    <Ionicons style={style.peopleComments} name="person-circle-outline" size={24} color="gray" />
                    <Text style={style.nameComment}>Jose Ramirez. 07 Sep.2022</Text>
                </View>

                <View style={style.comment}>
                    <Text style={style.comment}>
                        Lorem ipsum dolor sit, amet 😄😄😄 adipisicing elit.
                        Nihil 😄😄 provident distinctio aut. Inventore, 😄😄
                        nihil. Repudiandae ex hic 😄😄 vero esse, aliquid nobis
                        tenetur quasi laboriosam! Aliquid, doloremque impedit!
                    </Text>
                    <View style={style.lines}>
                    </View>
                </View>

                <View style={style.people}>
                    <Ionicons style={style.peopleComments} name="person-circle-outline" size={24} color="gray" />
                    <Text style={style.nameComment}>Jose Ramirez. 07 Sep.2022</Text>

                </View>

                <View style={style.comment}>
                    <Text style={style.comment}>
                        Lorem ipsum dolor sit, amet 😄😄😄 adipisicing elit.
                        Nihil 😄😄 provident distinctio aut. Inventore, 😄😄
                        nihil. Repudiandae ex hic 😄😄 vero esse, aliquid nobis
                        tenetur quasi laboriosam! Aliquid, doloremque impedit!
                    </Text>
                    <View style={style.lines}>
                    </View>
                </View>

                <View style={style.people}>
                    <Ionicons style={style.peopleComments} name="person-circle-outline" size={24} color="gray" />
                    <Text style={style.nameComment}>Jose Ramirez. 07 Sep.2022</Text>

                </View>

                <View style={style.comment}>
                    <Text style={style.comment}>
                        Lorem ipsum dolor sit, amet 😄😄😄 adipisicing elit.
                        Nihil 😄😄 provident distinctio aut. Inventore, 😄😄
                        nihil. Repudiandae ex hic 😄😄 vero esse, aliquid nobis
                        tenetur quasi laboriosam! Aliquid, doloremque impedit!
                    </Text>
                    <View style={style.lines}>
                    </View>
                </View>

                <View style={style.people}>
                    <Ionicons style={style.peopleComments} name="person-circle-outline" size={24} color="gray" />
                    <Text style={style.nameComment}>Jose Ramirez. 07 Sep.2022</Text>
                </View>
                <View style={style.comment}>
                    <Text style={style.comment}>
                        Lorem ipsum dolor sit, amet 😄😄😄 adipisicing elit.
                        Nihil 😄😄 provident distinctio aut. Inventore, 😄😄
                        nihil. Repudiandae ex hic 😄😄 vero esse, aliquid nobis
                        tenetur quasi laboriosam! Aliquid, doloremque impedit!
                    </Text>
                    <View style={style.lines}>
                    </View>
                </View>
                <View style={style.people}>
                    <Ionicons style={style.peopleComments} name="person-circle-outline" size={24} color="gray" />
                    <Text style={style.nameComment}>Jose Ramirez. 07 Sep.2022</Text>
                </View>
                <View style={style.comment}>
                    <Text style={style.comment}>
                        Lorem ipsum dolor sit, amet 😄😄😄 adipisicing elit.
                        Nihil 😄😄 provident distinctio aut. Inventore, 😄😄
                        nihil. Repudiandae ex hic 😄😄 vero esse, aliquid nobis
                        tenetur quasi laboriosam! Aliquid, doloremque impedit!
                    </Text>
                    <View style={style.lines}>
                    </View>
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
        paddingLeft: 20,
        paddingRight: 10,
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
        paddingStart: 20,
        paddingEnd: 20,
        color: '#FFF',
        textAlign: 'center',
        fontSize: 15,

    },
    lines: {
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF'

    },
    people: {
        flexDirection: 'row',
        padding: 15

    },
    peopleComments: {
        fontSize: 40,
        color: 'gray',

    },
    nameComment: {
        fontSize: 20,
        color: 'white',
        paddingStart: 20

    }

})