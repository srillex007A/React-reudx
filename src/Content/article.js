//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import PostList from './postLlist';
import {useDispatch, useSelector} from 'react-redux';
import {postAdded} from '../Redux/feature/postSlice';
import {selectAllUser} from '../Redux/user/userSlice';

// create a component
const Article = () => {
  const [title, setTitle] = useState(' find');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const state = useSelector(selectAllUser);
  console.log(state);
  // on save post click when save the title and content in state
  const onSavePostClick = () => {
    if (content && title) {
      dispatch(postAdded(title, content));
      setContent('');
      setTitle('');
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        placeholder={'title'}
        placeholderTextColor={'grey'}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        style={styles.inputText}
        placeholder={'content'}
        placeholderTextColor={'grey'}
        onChangeText={text => setContent(text)}
      />
      <FlatList
        data={state}
        renderItem={({item}) => (
          <View style={{flexDirection: 'row'}}>
            <Text  style={{color: 'black', padding: 10}}>{item.id}</Text>
            <Text style={{color: 'black'}}>{item.Name}</Text>
          </View>
        )}
      />

      <Button title="add Post" onPress={onSavePostClick} />
      <PostList />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    flex: 1,
    backgroundColor: 'white',
  },
  inputText: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    margin: 15,
    color: 'black',
  },
});

//make this component available to the app
export default Article;
