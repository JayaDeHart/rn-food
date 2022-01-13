import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  return (
    <View>
      <SearchBar
        setTerm={setTerm}
        onSubmit={() => console.log(`search yelp for ${term}`)}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
