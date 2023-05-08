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
<<<<<<< HEAD

        rend
      />

    </View>


  );
}

class MenuBar extends React.Component {
  render() {
    return (
        <Menu>
          <a id='about' className='menu-item' href='/'>About</a>
          <a id='contact' className='menu-item' href='/'>Contact</a>
          <a id='about' className='menu-item' href='/'>About</a>

        </Menu>
    )
  }
}
=======
      />

    </View>
  );

}
>>>>>>> 37883eff1c08067b5b670bb1df86c929018613e5
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