import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    container:{
        flex:2,
        alignItems:'center',
        justifyContent:'center',
    },
        inputContainers:{
            flex:1,
            justifyContent:'center',
            padding:10,
            backgroundColor:'black',
            maxHeight:'50%',
            width:'80%'
        },
            viewInput:{
               backgroundColor:'gray',
               margin:2,
               flexDirection:'row',
               alignItems:'center',
               padding:5
            },
                textInput:{
                    color:'white',
                    margin:5,
                    marginLeft:8,
                },
            viewBtn:{
                backgroundColor:'green',
                width:'50%',
                alignSelf:'center',
                borderRadius:3,
                marginTop:5,
                borderColor:'white',
                borderWidth:2,
                height:28,
                alignItems:'center'
            },
                textBtn:{
                    color:'white',
                    fontWeight:'bold',
                    
                },

})

export default styles