import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import database from "../config";
import {MaterialIcons} from "@expo/vector-icons"

export default function Tasks ({navigation}){
const [task, setTask] = useState([])
useEffect(()=>{
    database.collection("Tasks").onSnapshot((query)=>{
        const List = []
        query.forEach((doc)=>{
            List.push({...doc.data(),id:doc.id})
        })
        setTask(List)
    })
},[])

return(
    <View style={styles.container}>
        <FlatList
        showsVerticalScrollIndicator = {false} 
        data = {task}
        renderItem ={({item})=>{
            return(
                <View style={styles.tasks}>

                </View>
            )
        }}>

        </FlatList>
        <TouchableOpacity style = {styles.buttonNewTask}
        onPress ={()=>{navigation.navigate("newTask")}}>
        <Text style={styles.iconButton}>+</Text>
        </TouchableOpacity>
    </View>
)
    }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop:20
    },
    buttonNewTask: {
        width: 60,
        height: 60,
        position: "absolute",
        button: 30,
        left: 20,
        backgroundColor:"#f92e6a",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    iconButton: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold"
    },
    tasks: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop:5

    }
})