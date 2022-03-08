import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { MutableSnapshot, RecoilRoot } from 'recoil';

export function recoilHookTestWrapper<T, U>(
  customHook: (props: U) => T,
  initializeState?: (snapshot: MutableSnapshot) => void
) {
  return renderHook((props: U) => customHook(props), {
    wrapper: ({ children }) => (
      <RecoilRoot {...{ initializeState }}>{children}</RecoilRoot>
    ),
  });
}
