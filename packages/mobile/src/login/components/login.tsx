import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { HeroImage } from 'src/shared/components/hero-image';
import { useLogin } from '../hooks/use-login';

export const Login = () => {
  const { signIn, loading } = useLogin();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeroImage />
      <View style={styles.loginContainer}>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
          disabled={loading}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
