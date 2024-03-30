import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useLogin } from '../hooks/use-login';

GoogleSignin.configure({
  iosClientId: '564051064112-pjb0jk68lh2aldca0c2uo4041961er0u.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
});

export const Login = () => {
  const { signIn, loading } = useLogin();

  return (
    <View style={styles.loginContainer}>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Standard}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
        disabled={loading}
      />
    </View>
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
