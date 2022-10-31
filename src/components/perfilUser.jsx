import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Alert,
  TouchableHighlight,
  Text,
  View,
  Image,
} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';

const PerfilUser = () => {
  const navigation = useNavigation();

  const createReport = () => {
    navigation.dispatch(CommonActions.navigate({name: 'create-report'}));
  };

  const ListReport = () => {
    navigation.dispatch(CommonActions.navigate({name: 'List-report'}));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentImage}>
        <Image
          source={{
            uri: 'https://thumbs.dreamstime.com/b/cami%C3%B3n-de-entrega-en-la-log%C3%ADstica-vial-camiones-carretera-167183770.jpg',
          }}
          style={styles.logo}
        />
      </View>
      <TouchableHighlight style={styles.list} onPress={ListReport}>
        <Text style={styles.submitText}>list of reports</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.create} onPress={createReport}>
        <Text style={styles.submitText}>create report</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 'auto',
    backgroundColor: 'white',
  },
  contentImage: {
    padding: 10,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  list: {
    marginRight: 40,
    marginLeft: 40,
    paddingTop: 10,
    marginBottom: 15,
    paddingBottom: 10,
    backgroundColor: 'black',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'red',
    opacity: 0.8,
    position: 'relative',
    top: 50,
  },
  create: {
    marginRight: 40,
    marginLeft: 40,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'green',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'red',
    opacity: 0.8,
    position: 'relative',
    top: 50,
  },
  submitText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default PerfilUser;
