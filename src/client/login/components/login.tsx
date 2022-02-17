import { Link } from '@material-ui/core';
import React from 'react';
import { googleLoginUrl } from '../google-config';

export const Login = () => {
  return (
    <>
      <div>Login Page</div>
      <Link href={googleLoginUrl}>Login with Google</Link>
    </>
  );
};
