import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Slide } from '../Slide';

describe('Slide', () => {
    it('renders a Slide component', () => {
        render(<Slide content={<p>Test</p>} />);

        const text = screen.getByText('Test');

        expect(text).toBeInTheDocument();
    });
});
