import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import { CheckBox } from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen';

export default function SignupScreen() {
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 5000); // Changed to 5000ms (5 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require('./src/assests/Vector.png')} // Replace with the correct path to your image
        style={styles.imageBackground}
      />

      {/* Form */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Findr</Text>
        <Text style={styles.subtitle}>Join the Search for Hope</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} placeholder="Jane Cooper" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="debra.holt@example.com"
            keyboardType="email-address"
          />
          <Text style={styles.hint}>Your email address is your username.</Text>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="************"
            secureTextEntry
          />
          <Text style={styles.hint}>Your password must be 8 characters.</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            checked={rememberMe}
            onPress={() => setRememberMe(!rememberMe)}
            containerStyle={styles.checkboxContainer}
            title="Remember me"
            textStyle={styles.checkboxText}
          />
          <Text style={styles.checkboxHint}>
            Save my login details for next time.
          </Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>

        <Text style={styles.link}>Need Help or Have Questions?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#ffffff',
  },
  imageBackground: {
    width: '90%',
    height: 120,
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
    left: 200,
    right: 0,
    bottom: 0,
  },
  formContainer: {
    flex: 1,
    marginTop: 150,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#6D28D9',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  hint: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 5,
  },
  checkboxContainer: {
    marginBottom: 20,
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
  },
  checkboxText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#374151',
  },
  checkboxHint: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 5,
  },
  button: {
    height: 50,
    backgroundColor: '#6D28D9',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    fontSize: 14,
    color: '#6D28D9',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
