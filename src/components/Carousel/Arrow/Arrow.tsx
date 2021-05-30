import * as React from 'react';
import { useArrowStyles } from './Arrow.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons/faArrowCircleLeft';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons/faArrowCircleRight';

export enum ArrowDirection {
    Right = 'right',
    Left = 'left',
}

export interface IArrowProps {
    direction: ArrowDirection;
    onClick: () => void;
}

export const Arrow = ({ direction, onClick }: IArrowProps) => {
    const classes = useArrowStyles();
    const isLeftDirection = direction === ArrowDirection.Left;
    const leftArrowID = 'left-arrow';
    const rightArrowID = 'right-arrow';

    return isLeftDirection ? (
        <FontAwesomeIcon
            data-testid={leftArrowID}
            onClick={onClick}
            className={classes.icon}
            icon={faArrowCircleLeft}
        />
    ) : (
        <FontAwesomeIcon
            data-testid={rightArrowID}
            onClick={onClick}
            className={classes.icon}
            icon={faArrowCircleRight}
        />
    );
};
