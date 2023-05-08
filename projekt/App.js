import React from 'react';
import {Text, View, StyleSheet, Button, Alert} from 'react-native';

export function App() {
  return(
    <View style = {style.container}>
      <Text>My new App: "To do list"</Text>
      <Button
        title='Create a new list'
        color="#daa520"       // гірчично жовтий
        onPress={() => Alert.alert("Button press")}
      />

    </View>
  );

}
const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f0e68c',    //ніжно-жовтий
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    flexDirection: 'row'

  }
})

export default App;