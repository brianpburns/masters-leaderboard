import { render, screen } from '@testing-library/react';
import React from 'react';
import { Login } from './login';

const mockResponseGoogle = jest.fn();
const mockGoogleLogin = jest.fn();

const renderLogin = (loggingIn: boolean) => {
  render(
    <Login
      loggingIn={loggingIn}
      responseGoogle={mockResponseGoogle}
      googleLogin={mockGoogleLogin}
    />
  );
};

describe('Login', () => {
  test('renders login button', () => {
    renderLogin(false);

    expect(screen.getByText('Login')).toBeTruthy();
  });

  test('renders loader while attempting to persist login', () => {
    renderLogin(true);

    expect(screen.getByTestId('loader')).toBeTruthy();
  });
});
