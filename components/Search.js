import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import InputText from "../items/InputText";


 const Search=({route})=>{

    const email = route.params.email;

    const Api_Url = `https://agri-api.vercel.app/dailyentry/${email}`;
    const [dailyData, setDailyData] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState('false');


    const fetchDailyEntry= async()=>{
               setLoading(true);
        const response  = await fetch(Api_Url);
        const json = await response.json();
        console.log(json);
        setFilteredData(json);
            setDailyData(json);
           setLoading(false);
    }

    const handleSearch=(txt)=>{
        setSearch(txt);
        handleFilter(txt);
    }

    const handleFilter=async(txt)=>{
        // setLoading(true);
        const searchText = txt.toLowerCase();
        const filtered = dailyData.filter((item)=>item.farm.toLowerCase().includes(searchText)|| item.stage.toLowerCase().includes(searchText)||item.id.toString() === txt);
        console.log('filter:', filtered);
          setFilteredData(filtered);
        //   setLoading(false);
    }

    useEffect(()=>{
       fetchDailyEntry();
    },[])

    return(
        <View style={styles.container}>
            <InputText placeholder="Search here" value={search} onChange={handleSearch}/>
        {loading && <View style={{ alignItems: 'center', marginTop: 20 }}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>loading...</Text>
        </View>}
            <ScrollView style={{width:'100%'}}>
            {filteredData.map((item)=>(
                <View style={styles.container2}>
                <View style={styles.column1}>
                    <View style={{flexDirection:'row'}}><Text style={styles.heading}>Code: </Text><Text style={[styles.text,{width:100}]}>{item.id}</Text></View>
                    <View style={{flexDirection:'row'}}><Text style={styles.heading}>Farm: </Text><Text style={[styles.text,{width:100}]}>{item.farm}</Text></View>
                    <View style={{flexDirection:'row'}}><Text style={styles.heading}>Plot: </Text><Text style={[styles.text,{width:100}]}>{item.plot}</Text></View>
                    <View style={{flexDirection:'row',}}><Text style={styles.heading}>Area: </Text><Text style={[styles.text,{width:100}]}>{item.area}</Text></View>
                    {item.stage !==null && <View style={{flexDirection:'row'}}><Text style={styles.heading}>Stage: </Text><Text style={[styles.text,{width:100}]}>{item.stage}</Text></View>}
                    {item.type !==null && <View style={{flexDirection:'row'}}><Text style={styles.heading}>Type: </Text><Text style={[styles.text,{width:100}]}>{item.type}</Text></View>}
                    {item.deal !==null && <View style={{flexDirection:'row'}}><Text style={styles.heading}>Deal: </Text><Text style={[styles.text,{width:100}]}>{item.deal}</Text></View>}
                    {item.time !==null && <View style={{flexDirection:'row'}}><Text style={styles.heading}>time: </Text><Text style={[styles.text,{width:100}]}>{item.time}</Text></View>}
                </View>
                <View style={styles.column1}>
                {item.date !==null && <View style={{flexDirection:'row'}}><Text style={styles.heading}>Date: </Text><Text style={styles.text}>{item.date}</Text></View>}
                {item.mean !==null && <View style={{flexDirection:'row'}}><Text style={styles.heading}>Mean: </Text><Text style={styles.text}>{item.mean}</Text></View>}
                    {item.fuel !==null && <View style={{flexDirection:'row'}}><Text style={styles.heading}>Fuel: </Text><Text style={styles.text}>{item.fuel}</Text></View>}
                    {item.person !==null && <View style={{flexDirection:'row'}}><Text style={styles.heading}>Person: </Text><Text style={styles.text}>{item.person}</Text></View>}
                    {item.quantity !==null && <View style={{flexDirection:'row'}}><Text style={styles.heading}>Quantity: </Text><Text style={styles.text}>{item.quantity}</Text></View>}
                    {item.moga !==null && <View style={{flexDirection:'row'}}><Text style={styles.heading}>Moga: </Text><Text style={styles.text}>{item.moga}</Text></View>}
                    {item.units !==null && <View style={{flexDirection:'row'}}><Text style={styles.heading}>Units: </Text><Text style={styles.text}>{item.units}</Text></View>}
                </View>
                </View>
            ))}
            </ScrollView>
        </View>
    )
}
export default Search;

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
    },
    container2:{
        flexDirection:'row',
        width:'95%',
        alignItems:'flex-start',
        justifyContent:'center',
        // paddinLeft:'10%',
        marginTop:'5%',
        marginLeft:'2.5%',
        borderRadius:20,
        elevation:5,
        backgroundColor:'white',
        marginBottom:'1%'
    },
    column1:{
        flexDirection:'column',
    },
    heading:{
        fontSize:16,
        fontWeight:'bold',
        color:'black',
        padding:'1%',
        width:63
    },
    text:{
        fontSize:16,
        color:'black',
        fontWeight:'400',
        width:100,
        padding:'1%',
    }

})