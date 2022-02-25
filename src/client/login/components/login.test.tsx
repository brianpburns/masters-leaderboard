import { render, screen } from '@testing-library/react';
import React from 'react';
import { googleLoginUrl } from '../google-config';
import { Login } from './login';

describe('Login', () => {
  test('has correct href', () => {
    render(<Login />);

    expect(screen.getByTestId('login-button')).toHaveAttribute(
      'href',
      googleLoginUrl
    );
  });
});
