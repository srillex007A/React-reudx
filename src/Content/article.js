//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import PostList from './postLlist';
import {useDispatch} from 'react-redux';
import {postAdded} from '../Redux/feature/postSlice';
import {nanoid} from '@reduxjs/toolkit';

// create a component
const Article = () => {
  const [title, setTitle] = useState(' find');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
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
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        style={styles.inputText}
        placeholder={'content'}
        onChangeText={text => setContent(text)}
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
  },
});

//make this component available to the app
export default Article;
