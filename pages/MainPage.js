import { Text, View, StyleSheet, Alert, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { CheckBox } from "react-native-elements";

const addTask = (value) => {
  if (value.length === "") {
    Alert.alert("You must write something");
  } else {
    // Input is not empty
    Alert.alert("Input is not empty");
  }
};


// const checkedBox = () => {

//   const [inputText, setInputText] = useState('');
//   const [todo, setTodo] = useState([]);


//   const handleAddTodo = () => {
//     if (inputText !== ''){
//       setTodo([...todo, {id: Date.now(), text: inputText}]);
//       setInputText('');
//     }
//   };

// const handleInputChange = (text) => {
//     setInputText(text);
//   };


//   const handleDeleteTodo = (id) => {
//     setTodo(todo.filter((todo) => todo.id !== id));
//   };


//   const renderTodoItem = ({ item }) => (
//     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//       <Text>{item.text}</Text>
//       <Button
//         title="Delete"
//         onPress={() => handleDeleteTodo(item.id)}
//       />
//     </View>
//   );

// };


function MainPage() {
  return (
    <View style={styles.mainBlock}>
      <View>
        <Text style={styles.textH2}>To do list</Text>
      </View>


      <View style={{ flexDirection: "row" }}>
        <TextInput
          placeholder="Add your tasks"
          id="input-box"
          onPress={addTask}
          styles={{ padding: 10, flex: 1 }}
          style={styles.input} />


        <View style={{ flex: 1, padding: 16 }}>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={{ flex: 1, marginRight: 8, borderWidth: 1, padding: 8 }}
              placeholder="Enter a todo"
              value={inputText}
              onChangeText={handleInputChange}
            />

            <Button
              title="Add"
              onPress={handleAddTodo}
            />
          </View>


          {/* <FlatList
                data = {todo}
                renderItem={renderTodoItem}
                keyExtractor={(item) => item.id.toString()}
                style={{ marginTop: 16 }}
               /> */}

        </View>


        <Button style={styles.button}
                title="ADD"
                id="add_button"
                color={styles.button.backgroundColor}
                onclick={addTask}

        >
          <Text style={styles.buttonText}></Text>
        </Button>


      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `#4b0082`,
  },


  mainBlock: {
    width: "100%",
    backgroundColor: "#fff",
    marginVertical: 90,
    paddingVertical: 70,
    paddingHorizontal: 35,
    borderRadius: 10,
  },
  textH2: {

    fontFamily: "Arial",
    fontSize: 16,

  },
  input: {
    borderColor: "white",
    backgroundColor: "#edeef0",
    flex: 1,
    marginVertical: 5,
    borderWidth: 1,
    paddingHorizontal: 24,
    borderRadius: 30,

  },
  button: {
    backgroundColor: "#ff5945",
    borderRadius: 40,
    marginVertical: 5,
    fontSize: 16,
    cursor: "pointer",
    paddingRight: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
  },

});


export default MainPage;
