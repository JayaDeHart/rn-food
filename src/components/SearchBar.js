import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({ setTerm, onSubmit }) => {
  return (
    <View style={styles.background}>
      <AntDesign
        name="search1"
        size={30}
        color="black"
        style={styles.searchIcon}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Search"
        onChangeText={(newVal) => setTerm(newVal)}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  background: {
    display: 'flex',
    backgroundColor: 'lightgray',
    height: 50,
    borderRadius: 5,
    margin: 20,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
  },
  searchIcon: {
    marginLeft: 10,
    alignSelf: 'center',
    marginRight: 5,
  },
});
