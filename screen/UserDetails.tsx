import React, { useEffect, useState } from 'react'
import {View,FlatList,TouchableOpacity,Text,Image, ActivityIndicator,StyleSheet} from 'react-native'

export const UserDetails=(Props:any)=>{

    console.log(Props)
    const details=Props.route.params.selectedUser;

    return(
        <View style={styles.container}>
             <Image  style={{width:100,height:100,borderRadius:20}} source={{uri:details.picture.medium}}/>
             <Text style={styles.items}>{details.name.first}{details.name.last}</Text>
             <Text style={styles.items}>{details.email}</Text>
             <Text style={styles.items}>{details.gender}</Text>
             <Text style={styles.items}>{details.location.city}{details.name.state}</Text>
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