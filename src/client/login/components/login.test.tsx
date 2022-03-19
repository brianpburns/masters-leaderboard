import { render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { Login } from './login';

describe('Login', () => {
  test('renders login button', () => {
    render(
      <RecoilRoot>
        <Login />
      </RecoilRoot>
    );

    expect(screen.getByText('Login')).toBeTruthy();
  });
});
