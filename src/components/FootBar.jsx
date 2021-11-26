import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FaceIcon from '@mui/icons-material/Face';
import { Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    stickToBottom: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'space-evenly'

    },
    chip: {
        margin: '10px'
    }
}

);
export default function BottomActions() {
    const classes = useStyles();


    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ width: '100%' }}>
            <BottomNavigation
                className={classes.stickToBottom}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <Chip className={classes.chip} icon={<FaceIcon />} label="Action" color="secondary" />
                <Chip className={classes.chip} icon={<FaceIcon />} label="Action" color="secondary" />
                <Chip className={classes.chip} icon={<FaceIcon />} label="Action" color="secondary" />
                <Chip className={classes.chip} icon={<FaceIcon />} label="Action" color="secondary" />
                <Chip className={classes.chip} icon={<FaceIcon />} label="Action" color="secondary" />
                <Chip className={classes.chip} icon={<FaceIcon />} label="Action" color="secondary" />
                <Chip className={classes.chip} icon={<FaceIcon />} label="Action" color="secondary" />
                <Chip className={classes.chip} icon={<FaceIcon />} label="Action" color="secondary" />
            </BottomNavigation>
        </Box>
    );
}