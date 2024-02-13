import { GoogleOAuthProvider } from '@react-oauth/google';
import { screen } from '@testing-library/react';
import React from 'react';
import { renderWithProviders } from '../../../__test__/store';
import { Login } from './login';

const renderLogin = () =>
  renderWithProviders(
    <GoogleOAuthProvider clientId='dummy'>
      <Login />
    </GoogleOAuthProvider>
  );

describe('Login', () => {
  test('renders login button', () => {
    renderLogin();

    expect(screen.getByTestId('google-login-button')).toBeTruthy();
  });
});
