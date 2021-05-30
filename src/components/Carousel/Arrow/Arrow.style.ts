import { createUseStyles } from 'react-jss';
import { lightBlue, mediumBlue } from '../../../theme/colors';

export const useArrowStyles = createUseStyles({
    icon: {
        cursor: 'pointer',
        color: lightBlue,
        '&:hover': {
            color: mediumBlue,
        },
    },
});
