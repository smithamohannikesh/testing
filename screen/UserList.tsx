import React, { useEffect, useState } from 'react'
import {View,FlatList,TouchableOpacity,Text,Image, ActivityIndicator,StyleSheet} from 'react-native'
import {useSelector,useDispatch} from 'react-redux'
import {getAllPost} from '../redux/action/action'
export const UserList=(Props:any)=>{

    const dispatch =useDispatch();
    const [loading,setLoading]=useState(false);
    const[page,setPage]=useState(1)
    const userlists=useSelector((state:any)=>state.app.users)
    console.log(userlists)
    useEffect(()=>{
        getNewPost();
    },[page]    
    )
    const getNewPost=()=>{
        setLoading(true)
        dispatch(getAllPost(10,page))
        setLoading(false)
    }
    const getUserdetails=(selectedUser:any)=>{
        Props.navigation.navigate("UserDetails",{selectedUser:selectedUser})
    }

    return(
        <View style={styles.container} testID="UserlistScreen">
            <FlatList
            data={userlists}
            keyExtractor={(item)=>item.key}
            renderItem={itemData=>(
                <TouchableOpacity onPress={()=>{getUserdetails(itemData.item)}} style={styles.input} >
                    <Image  style={{width:50,height:50,borderRadius:20}} source={{uri:itemData.item.picture.thumbnail}}/>
                    <Text style={styles.items}>{itemData.item.name.first}{itemData.item.name.last}</Text>
                    <Text style={styles.items}>{itemData.item.email}</Text>
                </TouchableOpacity>
            )}
            onEndReached={()=>setPage(page+1)}
            onEndReachedThreshold={5}
            />
            {loading && <ActivityIndicator size="large" color="blue"/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      
      backgroundColor: '#fff',
     
    
    },
    input:{
        margin:10,
        backgroundColor:"grey",
        padding:6, alignItems: 'center',
        justifyContent: 'center',
    },
    items:{
        fontSize:20
    }
  });