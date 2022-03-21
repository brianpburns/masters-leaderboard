import { render, screen } from '@testing-library/react';
import React from 'react';
import { Login } from './login';

const mockSignIn = jest.fn();

const renderLogin = () => {
  render(<Login signIn={mockSignIn} />);
};

describe('Login', () => {
  test('renders login button', () => {
    renderLogin();

    expect(screen.getByText('Sign In')).toBeTruthy();
  });
});
