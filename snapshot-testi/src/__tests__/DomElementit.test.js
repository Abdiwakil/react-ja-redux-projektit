import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import DomElementit from '../DomElementit';
import { create } from 'react-test-renderer';
 
afterEach(cleanup);
 
it('pitäisi olla 0', () => {
    const { getByTestId } = render(<DomElementit />);
    expect(getByTestId('laskuri')).toHaveTextContent(0);
});
 
it('pitäisi olla enabled', ()=> {
    const { getByTestId } = render(<DomElementit />);
    expect(getByTestId('nappi-ylos')).not.toHaveAttribute('disabled');
})
 
it('pitaisi olla disabled', ()=> {
    const { getByTestId } = render(<DomElementit />);
    expect(getByTestId('nappi-alas')).toBeDisabled();
})
describe('Snapshot-testi', () => {
    test('testataan DomElementit', () => {
        let tree = create(<DomElementit />)
        expect(tree.toJSON()).toMatchSnapshot();
    })
})
