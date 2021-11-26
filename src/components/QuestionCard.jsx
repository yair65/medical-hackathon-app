import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import medicalImageUrl from '../assets/pictures/images';
import { makeStyles } from '@mui/styles';
import { Collapse, Paper, Slide, StepContent } from '@mui/material';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

// const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
const useStyles = makeStyles({
    cardContainer: {
        padding: '40px',
        // position: 'absolute',
        width: '50vw',
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    buttonRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // width: '30%'
    },
    buttonRowContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',

        width: '100%'
    },
    button: {
        marginLeft: '2vw'
    }
}

);

export function ImgMediaCard({ scrollToNext, item, containerRef, currentCard }) {

    const classes = useStyles();

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = Object.values(item.stages);
    console.log(steps[activeStep]?.message);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep === steps.length - 1) scrollToNext();
    };

    const collapse = (event) => {
        event.preventDefault();
        // setIsOpen(false);
        scrollToNext();
    }

    return (
        <div className={classes.cardContainer}>

            <Fade
                // direction="up"
                in={currentCard}
                // container={containerRef.current}
                timeout={{ enter: 1000, exit: 1000 }}
                mountOnEnter
                unmountOnExit
            >
                <Paper className={classes.cardContainer}>
                    <Stepper activeStep={activeStep} orientation='horizontal'>
                        {steps.map((step, index) => {
                            return (
                                <Step key={`step-${index}`}>
                                    <StepLabel
                                    // orientation='ho'
                                    ></StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {
                        // activeStep === steps.length ? (
                        //     <React.Fragment>
                        //         <Typography sx={{ mt: 2, mb: 1 }}>
                        //             All steps completed - you&apos;re finished
                        //         </Typography>
                        //         <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        //             <Box sx={{ flex: '1 1 auto' }} />
                        //             <Button onClick={scrollToNext}>Done!</Button>
                        //         </Box>
                        //     </React.Fragment>
                        // ) : 
                        <React.Fragment>
                            <Typography variant='h3' sx={{ mt: 2, mb: 1 }}>{steps[activeStep]?.message}</Typography>
                            {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}> */}
                            {/* <Box sx={{ flex: '1 1 auto' }} /> */}
                            <div className={classes.buttonRowContainer}>

                                <div className={classes.buttonRow}>
                                    {steps[activeStep]?.options.map(option => (
                                        <div className={classes.button}>

                                            <Button onClick={handleNext} variant="contained" className={classes.button}>
                                                <Typography variant='h4' color='#7a58d1'>
                                                    {/* {activeStep === steps.length - 1 ? 'Finish' : 'Next'} */}
                                                    {option}
                                                </Typography >
                                            </Button>
                                        </div>

                                    )
                                    )
                                    }
                                </div>
                            </div>
                            {/* </Box> */}
                        </React.Fragment>

                    }
                </Paper>
            </Fade>
        </div>
    );
}







// return (

//     <div className={classes.cardContainer}
// hidden={!currentCard}
// >
/*

                <Card
                // sx={{ maxWidth: 345 }}
                >
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={medicalImageUrl}
                    />
                    <Collapse in={isOpen} timeout="auto" unmountOnExit>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.questionName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={event => collapse(event)}>Share</Button>
                            <Button size="small" onClick={event => collapse(event)}> Learn More</Button>
                        </CardActions>
                    </Collapse>
                </Card>
            </Fade>
        </div >
    );
} */