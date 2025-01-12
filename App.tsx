// import CheckBox from '@react-native-community/checkbox';
import React, { useEffect } from 'react';
// import { View, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
// import Register from './src/register/register';
import AppNavigator from './src/navigation/Navigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App = () => {
  useEffect(()=>{
const timer = setTimeout(()=>{
  SplashScreen.hide();
},1000);
return ()=>clearTimeout(timer);
  },[]);

  // const [isChecked, setIsChecked] = useState(false);
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
};

export default App;
