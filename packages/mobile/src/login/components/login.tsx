import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { HeroImage } from 'src/shared/components/hero-image';
import { useLogin } from '../hooks/use-login';

export const Login = () => {
  const { signIn, loading } = useLogin();

  return (
    <ScrollView>
      <HeroImage />
      <View style={styles.loginContainer}>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
          disabled={loading}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    margin: 'auto',
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
