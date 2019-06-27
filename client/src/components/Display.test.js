import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Display from './Display';
import 'jest-dom/extend-expect';

it('renders', () => {
    render(<Display/>);
  });

  it('should display the count', () => {
    const count = { 
    balls: 3,
    strikes: 2,
    fouls: 1,
    hits: 77
    }
    
    const { getByText, getAllByTestId } = render(<Display
        balls={count.balls}
        strikes={count.trikes}
        fouls={count.fouls}
        hits={count.hits}
      />);
  
    getByText(/Balls/i);
  
    const countDiv = getAllByTestId('count');
  
    expect(countDiv.length).toBe(Object.keys(count).length);
  
    const divTexts = countDiv.map(d => d.textContent);
  
    expect(countDiv).toEqual(divTexts);
  });