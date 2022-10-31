import {useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PerfilUser from './src/components/perfilUser';
import CreateReport from './src/components/createReport';
import ListReport from './src/components/listReport';
import {AppContext} from './src/context/context';

const Stack = createNativeStackNavigator();

function App() {
  const [state, setState] = useState({});

  return (
    <AppContext.Provider value={{state, setState}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="RoadLogistics" component={PerfilUser} />
          <Stack.Screen name="create-report" component={CreateReport} />
          <Stack.Screen name="List-report" component={ListReport} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

export default App;
