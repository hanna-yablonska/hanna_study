
import React from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';
const COLORS = {primary: '#1f145c', white: '#fff'}


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
}  from 'react-native/Libraries/NewAppScreen';

const App = ()=> {
  return(
      <SafeAreaView 
        style={{flex:1, backgroundColor: COLORS.white}}>

          <View style={styles.header}>
            <Text style={{}}>TODO APP</Text>
          </View>

      </SafeAreaView>

  );
};





const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  }
});

export default App;
