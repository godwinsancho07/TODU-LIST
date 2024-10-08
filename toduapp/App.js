import React,{useState} from "react";
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet,Text,TextInput,TouchableOpacity,View } from "react-native";
import Task from "./Task";

export default function App(){
  const[task,setTask]=useState();
  const[taskitems,settaskitems]=useState([]);

  const handleaddtask =  ()=>{
    settaskitems([...taskitems,task])
    setTask(null);
  }

  const complet=(index)=>{
    let itemcopy=[...taskitems];
    itemcopy.splice(index,1);
    settaskitems(itemcopy);
  }

  return (
<View style={styles.continue}>
 <View style={styles.l1}>
     <Text style={styles.t1}>Today's tasks</Text>
     <View style={styles.items}>
        {
          taskitems.map((item,index) => {
             return <TouchableOpacity key={index} onPress={ ()=> complet(index)}>
             <Task text={item}></Task>
             </TouchableOpacity>
             
          
          })
}
     </View>
</View>
<KeyboardAvoidingView behavior={Platform === "android" ? "padding":"height"} style={styles.writetaskwrapper}>
<TextInput style={styles.input} placeholder="Write a task" value={task} onChangeText={text =>setTask(text)}></TextInput>
<TouchableOpacity onPress={()=> handleaddtask()}>
  <View style={styles.addwrapper}>
    <Text style={styles.addtext}>+</Text>
  </View>
</TouchableOpacity>



</KeyboardAvoidingView>


</View>
  );
}

const styles = StyleSheet.create({
  continue:{
  flex:1,
 backgroundColor:'#C1C5B9',
  },l1:{
    paddingTop:80,
    padding:20,
  },t1:{
    fontSize:24,
    fontWeight:"bold"
  },items:{
marginTop:30
  },writetaskwrapper:{
    position:"absolute",
    bottom:20,
    width:"100%",
    flexDirection:"row",
  justifyContent:"space-evenly", 
  alignItems:"center"
  },input:{
   padding:15,
    width:250,
    backgroundColor:"white",
    borderRadius:60,
    borderColor:"#C0C0C0",
    borderWidth:1,
  },addtext:{
    fontSize:29,
    fontWeight:"200",
    width:50,
    height:50,
    backgroundColor:"white",
    borderRadius:60,
 textAlign:"center",
 textAlignVertical:"center" 
}
})