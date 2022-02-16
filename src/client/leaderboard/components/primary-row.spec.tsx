import React from 'react';
import { render } from '@testing-library/react';

import { PrimaryRow } from './primary-row';
import { teams } from 'test/mocks';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { golfersState } from 'src/client/app';
import { golfersStateData, setupMockServer } from 'test/mocks';

setupMockServer();

const renderPrimaryRow = () => {
  const initializeState = ({ set }: MutableSnapshot) => {
    set(golfersState, golfersStateData);
  };

  render(
    <RecoilRoot initializeState={initializeState}>
      <table>
        <tbody>
          <PrimaryRow position={1} row={teams[0]} />
        </tbody>
      </table>
    </RecoilRoot>
  );
};

describe('PrimaryRow', () => {
  test('renders', () => {
    renderPrimaryRow();

    expect(true).toBe(true);
  });
});
