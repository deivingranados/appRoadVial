import {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  Image,
  View,
  Button,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Text,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppContext} from '../context/context';

const CreateReport = () => {
  const [images, setImage] = useState('https://via.placeholder.com/200');
  const [text, onChangeText] = useState(null);
  const {state, setState} = useAppContext();

  const takePicture = () => {
    const options = {
      title: 'teke picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, response => {
      if (response.errorCode) {
        Alert.alert('error de permits');
      } else if (response.didCancel) {
        Alert.alert('cancel');
      } else {
        const uri = response.assets[0].uri;
        setImage(uri);
      }
    });
  };

  const openLibrary = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.errorMessage) {
        console.log('error');
      } else if (response.didCancel) {
        console.log('cancel');
      } else {
        const uri = response.assets[0].uri;
        setImage(uri);
      }
    });
  };

  const sendReport = async () => {
    if (images && text) {
      const report = JSON.parse(await AsyncStorage.getItem('report')) || [];
      report.push({
        imageReport: images,
        description: text,
      });
      AsyncStorage.setItem('report', JSON.stringify(report));
      setState({
        ...state,
        list: report,
      });
      Alert.alert('report created');
    } else {
      Alert.alert('!!create report');
    }
  };

  return (
    <View>
      <TouchableHighlight style={styles.picture} onPress={takePicture}>
        <Text style={styles.submitText}>Take oicture</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.library} onPress={openLibrary}>
        <Text style={styles.submitText}>Open library</Text>
      </TouchableHighlight>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="description of the report"
        value={text}
      />
      <Image
        source={{
          uri: images,
        }}
        style={{
          alignSelf: 'center',
          width: 200,
          height: 200,
        }}
      />
      <TouchableHighlight style={styles.create} onPress={sendReport}>
        <Text style={styles.submitText}>send report</Text>
      </TouchableHighlight>
    </View>
  );
};

export default CreateReport;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    height: 100,
    borderRadius: 20,
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
  picture: {
    marginRight: 40,
    marginLeft: 40,
    paddingTop: 10,
    marginBottom: 20,
    paddingBottom: 10,
    backgroundColor: 'red',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'red',
    opacity: 0.8,
    position: 'relative',
    top: 50,
  },
  library: {
    marginRight: 40,
    marginLeft: 40,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 60,
    backgroundColor: 'purple',
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
