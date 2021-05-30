import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Arrow, ArrowDirection } from '../Arrow';

describe('Arrow', () => {
    const onClickMock = jest.fn();
    const selectors = {
        leftArrow: 'left-arrow',
        rightArrow: 'right-arrow',
    };

    it('renders a left Arrow component', () => {
        render(<Arrow direction={ArrowDirection.Left} onClick={onClickMock} />);

        const arrow = screen.getByTestId(selectors.leftArrow);

        expect(arrow).toBeInTheDocument();
    });

    it('renders a right Arrow component', () => {
        render(<Arrow direction={ArrowDirection.Right} onClick={onClickMock} />);

        const arrow = screen.getByTestId(selectors.rightArrow);

        expect(arrow).toBeInTheDocument();
    });

    it('should trigger the onClick function when clicking on the arrow', () => {
        render(<Arrow direction={ArrowDirection.Right} onClick={onClickMock} />);

        const arrow = screen.getByTestId(selectors.rightArrow);

        fireEvent.click(arrow);

        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
