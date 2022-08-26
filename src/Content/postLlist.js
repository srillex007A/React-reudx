//import liraries
import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {selectAllPosts} from '../Redux/feature/postSlice';
// create a componen
const PostList = () => {
  const state = useSelector(selectAllPosts);
  // console.log(state)
  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        renderItem={({item}) => (
          <View style={styles.postStyle}>
            {/* <Text style={{color: 'black', fontSize: 15}}>{item.id}</Text> */}
            <Text style={{color: 'black', fontSize: 15}}>{item.content}</Text>
            <Text style={{color: 'black', fontSize: 15}}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 24,
  },
  postStyle: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    padding: 6,
  },
});

//make this component available to the app
export default PostList;
