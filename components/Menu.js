import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Pressable, Image,  } from "react-native";
import theme from "../theme/GlobalTheme";

export default function Menu({route}){

    const email = route.params.email;

    const navigation = useNavigation();

    const [create, setCreate] = useState(false);


    useEffect(()=>{
        console.log(email);
    },[]);

    const CreateOption=()=>{
        return(
            <View style={{width:'100%',  flexDirection:'column', borderColor:'grey', backgroundColor:'white'}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Farms', {email:email})}}>
                <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', alignItems:'center', padding:2, borderBottomWidth:1, borderColor:'grey', height:40, padding:'2%'}}>
                <Text style={{color:'black'}}>New Farm</Text>
            <Image source={require('../assets/chevron.png')} style={{height:15, width: 15}}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Variety', {email:email})}}>
                <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', alignItems:'center', padding:2, borderBottomWidth:1, borderColor:'grey', height:40, padding:'2%'}}>
                <Text style={{color:'black'}}>New Variety</Text>
            <Image source={require('../assets/chevron.png')} style={{height:15, width: 15}}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Product', {email:email})}}>
                <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', alignItems:'center', padding:2, borderBottomWidth:1, borderColor:'grey', height:40, padding:'2%'}}>
                <Text style={{color:'black'}}>Product</Text>
            <Image source={require('../assets/chevron.png')} style={{height:15, width: 15}}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Category', {email:email})}}>
                <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', alignItems:'center', padding:2, borderBottomWidth:1, borderColor:'grey', height:40, padding:'2%'}}>
                <Text style={{color:'black'}}>New Category</Text>
            <Image source={require('../assets/chevron.png')} style={{height:15, width: 15}}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Search', {email:email})}}>
                <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', alignItems:'center', padding:2, borderBottomWidth:1, borderColor:'grey', height:40, padding:'2%'}}>
                <Text style={{color:'black'}}>Search</Text>
            <Image source={require('../assets/chevron.png')} style={{height:15, width: 15}}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('IrrigationSr', {email:email})}}>
                <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', alignItems:'center', padding:2, borderBottomWidth:1, borderColor:'grey', height:40, padding:'2%'}}>
                <Text style={{color:'black'}}>Irrigation Source</Text>
            <Image source={require('../assets/chevron.png')} style={{height:15, width: 15}}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Job', {email:email})}}>
                <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', alignItems:'center', padding:2, borderBottomWidth:1, borderColor:'grey', height:40, padding:'2%'}}>
                <Text style={{color:'black'}}>New Job</Text>
            <Image source={require('../assets/chevron.png')} style={{height:15, width: 15}}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Plot', {email:email})}}>
                <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', alignItems:'center', padding:2, borderBottomWidth:1, borderColor:'grey', height:40, padding:'2%'}}>
                <Text style={{color:'black'}}>New Plot</Text>
            <Image source={require('../assets/chevron.png')} style={{height:15, width: 15}}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('DailyEntry', {email:email})}}>
                <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', alignItems:'center', padding:2, borderBottomWidth:1, borderColor:'grey', height:40, padding:'2%'}}>
                <Text style={{color:'black'}}>Daily Entry</Text>
            <Image source={require('../assets/chevron.png')} style={{height:15, width: 15}}/>
            </View>
            </TouchableOpacity>
            </View>
        )
    }


    const ViewClick=()=>{
        setCreate(false);
    }

    return(
        <Pressable onPress={ViewClick}>
        <View style={{height:'100%', width:'100%', flexDirection:'column', padding:5, backgroundColor:'white'}}>
        <View><CreateOption/></View>         
        </View>
        </Pressable>
    )
}