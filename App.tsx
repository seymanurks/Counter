import React, {useState} from "react";
import {SafeAreaView, View, Text, Button} from "react-native"

const App = () => {
  
  const [counter, setCounter] = useState(0)

  function increaseCounter() {
    setCounter(counter + 1)
  }

  function decreaseCounter() {
    setCounter(counter -1)
  }

  return(
    <SafeAreaView>
      <Text style = {{fontSize: 30, margin: 10}}>Counter: {counter}</Text>
      <Button title = "INCREASE COUNTER" onPress = {increaseCounter}></Button>
      <Button title = "DECREASE COUNTER" onPress = {decreaseCounter}></Button>
    </SafeAreaView>
  )
}

export default App;