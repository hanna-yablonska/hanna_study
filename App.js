import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, Button, TextInput, Alert, Touchable, TouchableOpacity } from "react-native";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";

const addTask = (value) => {
  if (value.length === "") {
    Alert.alert("You must write something");
  } else {
    // Input is not empty
    Alert.alert("Input is not empty");
  }
};

// function saveData() {
//   localStorage.setItem("data", )
// }


const states = {
  main: "main",
  about: "about",
  contact: "contact",
};

function ToDoApp() {

  const [page, setPage] = useState(states.main);

  // Додавання елементів in form
  const [listOfItems, setListOfItems] = useState("");
  const [todos, setTodos] = useState([]);


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          title="Home"
          onPress={() => setPage(states.main)}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.headerButton}
          title="About"
          onPress={() => setPage(states.about)}>
          <Text>About</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.headerButton}
          title="Contact"
          onPress={() => setPage(states.contact)}>
          <Text>Contact</Text>
        </TouchableOpacity>
      </View>


      <FlatList data={listOfItems} renderItem={({ item }) => (
        <Text>{item.todos}</Text>
      )} />


      {(() => {
        console.log(page);
        switch (page) {
          case states.main:
            return (
              <MainPage></MainPage>
            );
          case states.about:

            return (<AboutPage></AboutPage>);
          case states.contact:

            return (<View></View>);

        }
      })()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#4b0082`,
  },
  header: {
    margin: 10,
    backgroundColor: `#7f07f0`,
    borderRadius: 10,
    flexDirection: "row",
  },
  headerButton: {
    margin: 8,
    padding: 10,
    backgroundColor: "#ff5945",
    borderRadius: 16,
  },
  mainBlock: {
    width: '100%',
    // maxHeight: 500,
    backgroundColor: '#fff',
    marginVertical: 90,
    // marginLeft: 20,
    // marginHorizontal: 5,
    paddingVertical: 70,
    paddingHorizontal: 35,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#ff5945',
    borderRadius: 40,
    marginVertical: 5,
    fontSize: 16,
    cursor: 'pointer',
    paddingRight: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  input: {
    borderColor: 'white',
    backgroundColor: '#edeef0',
    flex: 1,
    marginVertical: 5,
    borderWidth: 1,
    paddingHorizontal: 24,
    borderRadius: 30,

  },
  buttonContainer: {
    marginVertical: 20,
    flexDirection: 'row',
  },
  textH2: {

    fontFamily: "Arial",
    fontSize: 16,

  },
  listItem: {
    justifyContent: 'flex-start',

  },
});
export default ToDoApp;
