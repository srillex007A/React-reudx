//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  Increment,
  Decrement,
  reset,
  IncrementByAmount,
} from './Redux/feature/CounterSlice';

// create a component
const Login = () => {
  const StoreState = useSelector(state => state.Counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncreentAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncreentAmount(0);
    dispatch(reset());
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25}}>{StoreState}</Text>
      <TextInput
        value={incrementAmount}
        style={styles.textInput}
        placeholder={'add amount'}
        onChangeText={amount => setIncreentAmount(amount)}
      />
      <View style={styles.Button}>
        <Button title="Increment" onPress={() => dispatch(Increment())} />
        <Button title="Decrement" onPress={() => dispatch(Decrement())} />
        <Button
          title="IncrementByAmount"
          onPress={() => dispatch(IncrementByAmount(addValue))}
        />
        <Button title="reset" onPress={resetAll} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  Button: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    width: '50%',
    height: 50,
    borderWidth: 1,
  },
});

//make this component available to the app
export default Login;
