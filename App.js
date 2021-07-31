import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Keyboard, View, FlatList, Alert } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1'},
    { text: 'create an app', key: '2'},
    { text: 'play on the switch', key: '3'},
  ])

  const pressHandler = (key) => {
    console.log(key)
    setTodos((prevTodos) => (
      prevTodos.filter((item) => item.key != key)
    ))
  }

  const addTodoHandler = (input) => {
    if(input.length > 3) {
      setTodos((prevTodos) => {
        return [{text: input, key: prevTodos.length > 0 ? (parseInt(prevTodos[0].key,10) - 1).toString(10) : '1'}, ...prevTodos]
      })
    }
    else {
      Alert.alert('OOPS', 'Todos must be over 3 chars long', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }
  }

  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
        console.log('dismissed keyboard')}
      }>
      <View style={styles.container}>
        <Header />
        <View style={styles.content} >
          <AddTodo onPress= {addTodoHandler}/>
          <View style={styles.list}>
            <FlatList
              data = {todos}
              renderItem={({ item }) => (
                <TodoItem 
                  item = {item}
                  pressHandler = {pressHandler}/>
              )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1
  }
});
