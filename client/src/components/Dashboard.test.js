import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Dashboard from './Dashboard';
import 'jest-dom/extend-expect';

it('renders', () => {
    render(<Dashboard/>);
  });
