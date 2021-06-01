import { createUseStyles } from 'react-jss';
import { white } from '../../../theme/colors';

export const useSlideStyles = createUseStyles({
    slide: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white,
        borderRadius: '4px',
        overflow: 'hidden',
        animation: '$slideRight 1s',
    },
    '@keyframes slideRight': {
        from: { opacity: 0 },
        to: { opacity: 1 },
    },
});
