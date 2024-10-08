import React from "react";
import { View,Text,StyleSheet, TouchableOpacity } from "react-native";

const Task =(props)=>{
   
   return(
      <View style={styles.item}>
         <View style={styles.itemleft}>
            <TouchableOpacity style={styles.squ}></TouchableOpacity>
         <Text style={styles.itemtext}>{props.text}</Text>
         </View>                      
         <View style={styles.circule}></View>
      </View>
   )
}

const styles= StyleSheet.create({
item:{
   backgroundColor:"white",
   padding:15,
   borderRadius:10,
   flexDirection:"row",
   alignItems:"center",
   justifyContent:"space-between",
   marginTop:10
},itemleft:{
flexDirection:'row',
alignItems:'center',
flexWrap:'wrap'
}



,squ:{
   height:24,
   width:24,
   backgroundColor:'#55BCF6',
   opacity:0.4,
   borderRadius:5,
   marginRight:15
},itemtext:{
   maxWidth:"80%",
   elevation:5 
},
circule:{
   height:12,
   width:12, 
   borderColor:'#55BCF6',
   borderWidth:2,
   borderRadius:5
}
}); 
export default Task;
