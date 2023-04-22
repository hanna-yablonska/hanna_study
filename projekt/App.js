
import React, {useState} from "react";

import { StyleSheet, Text, TextInput, View } from "react-native";

function App() {
  const [text, useText] = useState('')

  const [lista, useLista] = useState(['First text', 'Second text', 'Third text'])


  return(
<View>
  <Text style ={styles.text} > {text}</Text>
  <TextInput style= {styles.jakisinput} onChangeText={(e) => {useText(e)}}/>
  <View style = {styles.lista}>
    {lista.map((text, idx) => {
      return (<Text key={idx} style={styles.element_listy}> {text}</Text>)
    })}
  </View>

</View>


  )
}



const styles = StyleSheet.create({
  text: {
    color: "green",
    fontSize: 40,
    padding: 30
    
  },
  jakisinput: {
    color: "red",
    width: 20

  },
  element_listy: {
    color: 'blue',
    fontSize: 30
    

  }

})



export default App;