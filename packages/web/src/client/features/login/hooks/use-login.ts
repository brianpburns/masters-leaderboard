import { CredentialResponse, PromptMomentNotification, useGoogleOneTapLogin } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { selectAuthToken, useAppSelector, useGlobalAction } from 'src/client/store';

export const useLogin = (oneTap = true) => {
  const [finishedSignIn, setFinishedSignIn] = useState(false);
  const { setAuthToken } = useGlobalAction();
  const history = useHistory();
  const authToken = useAppSelector(selectAuthToken);

  useEffect(() => {
    if (authToken) {
      setFinishedSignIn(true);
    }
  }, [authToken]);

  const onSuccess = (res: CredentialResponse) => {
    if (authToken) return;

    if (res.credential) {
      setAuthToken(res.credential);
      setFinishedSignIn(true);
      history.push('team');
    } else {
      history.push('leaderboard');
    }
  };

  const onError = () => {
    history.push('leaderboard');
  };

  const promptMomentNotification = (notification: PromptMomentNotification) => {
    // Failed to display the login prompt or the user dismissed it
    if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
      history.push('login');
    }

    // At the point of the login disappearing
    if (notification.isDismissedMoment()) {
      const reason = notification.getDismissedReason();
      if (reason !== 'credential_returned') {
        history.push('login');
      }
    }
  };

  useGoogleOneTapLogin({
    onSuccess,
    onError,
    promptMomentNotification,
    cancel_on_tap_outside: false,
    disabled: !!authToken || !oneTap,
  });

  return { finishedSignIn, onSuccess, onError };
};
