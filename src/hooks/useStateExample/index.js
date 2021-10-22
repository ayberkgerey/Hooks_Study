import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function UseStateExample() {
  const [count, setCount] = useState(0);
  const [artists, setArtists] = useState([
    {id: 1, title: 'Ummet Ozcan'},
    {id: 2, title: 'Dimitri Vegas & Like Mike'},
    {id: 3, title: 'Solomun'},
    {id: 4, title: 'Dixon'},
  ]);
  const [artistName, setArtistName] = useState();

  const wholeArtists = () => {
    return artists.map(function (artist, i) {
      return (
        <View key={i}>
          <View style={{flexDirection: 'row'}}>
            <Text>{artist.id}) </Text>
            <Text>{artist.title}</Text>
          </View>
        </View>
      );
    });
  };

  const addArtist = () => {
    setArtists([...artists, {id: artists.length + 1, title: artistName}]);
  };

  return (
    <View style={styles.container}>
      <Text>UseState Example</Text>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            setCount(count - 1);
          }}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.buttonText}>{count}</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            setCount(count + 1);
          }}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.artistContainer}>
        <Text>Music Makers</Text>
        {wholeArtists()}
      </View>
      <View style={styles.artistInputContainer}>
        <TextInput
          placeholder="Artist Name"
          style={styles.artistInput}
          value={artistName}
          onChangeText={text => setArtistName(text)}
        />
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => {
            addArtist();
            setArtistName();
          }}>
          <Text style={{color: 'white'}}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonStyle: {
    borderRadius: 60,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
  },
  artistContainer: {
    marginTop: 20,
  },
  artistInputContainer: {
    paddingTop: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
  artistInput: {
    width: 300,
    height: 40,
    borderWidth: 2,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingLeft: 20,
    borderRightColor: 'white',
  },
  addBtn: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 50,
    borderWidth: 2,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
});
