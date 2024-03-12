import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image } from "react-native";
import Login from "./Login";
import HomeItem from "../items/HomeItem";
import theme from "../theme/GlobalTheme";

export default function Home({navigation, route}){

    const email = route.params.email;

    const handleCreate=()=>{
        navigation.navigate('Menu',{email: email});
    }

    // useEffect(()=>{
    //     console.log('email:', email);
    // },[])

    return(
        <View
        style={{flexDirection:'column', alignItems:'center', height:'100%', width:'100%', backgroundColor:'white', justifyContent:'space-evenly', backgroundColor:theme.colors.white}}>
            <Image style={{height:150, width:150, borderRadius:100, marginTop:'20%'}} source={require('../assets/farmer.png')}/>
            <View style={{flex:1, width:'100%', alignItems:'center', justifyContent:'flex-start', paddingTop:'20%'}}>
            <Text style={{width:'80%', fontSize:25,fontWeight:'700', color:theme.colors.blue}}>Select Options!</Text>
            <View style={{flexDirection:'row', width:'100%', justifyContent:'center', height:'35%', alignItems:'center'}}>
            <HomeItem text="Create" image={require('../assets/create.png')} onPress={handleCreate}/>
            <HomeItem text="Daily-entry" image={require('../assets/daily-entry.png')}/>
            <HomeItem text="Search" image={require('../assets/search.png')}/>
            </View>
            </View>
            {/* <View style={{flexDirection:'row', width:'100%', justifyContent:'center', height:'20%', alignItems:'center'}}>
            <HomeItem text="Search" image={require('../assets/search.png')}/>
        </View> */}
        </View>
    )
}