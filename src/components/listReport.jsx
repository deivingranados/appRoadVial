import {useEffect, useState} from 'react';
import {Image, View, Button, StyleSheet, Text, ScrollView} from 'react-native';

import {useAppContext} from '../context/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListReport = () => {
  const {state, setState} = useAppContext();

  useEffect(() => {
    AsyncStorage.getItem('report').then(res => {
      setState({
        ...state,
        list: JSON.parse(res),
      });
    });
  }, []);

  return (
    <ScrollView>
      <View>
        {state.list ? (
          Object.entries(state.list)
            .reverse()
            .map(([key, value]) => {
              return (
                <View style={styles.content} key={key}>
                  <View style={styles.contentImage}>
                    <Image
                      style={styles.imageMovie}
                      source={{
                        uri: value.imageReport,
                      }}
                    />
                  </View>
                  <View style={styles.contentText}>
                    <Text>{value.description} </Text>
                  </View>
                </View>
              );
            })
        ) : (
          <Text style={styles.Text}>no report created</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default ListReport;

const styles = StyleSheet.create({
  content: {
    margin: 'auto',
    width: '100%',
    padding: 10,
    margin: 4,
    marginTop: 10,
  },
  contentImage: {
    marginBottom: 10,
    alignItems: 'center',
  },
  contentText: {
    borderWidth: 1,
    padding: 30,
    borderRadius: 5,
    width: '100%',
  },
  imageMovie: {
    width: 250,
    height: 250,
    borderRadius: 5,
  },
  Text: {
    marginTop: 200,
    textAlign: 'center',
    color: 'red',
  },
});
