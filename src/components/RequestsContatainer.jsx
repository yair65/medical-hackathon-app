import React, { createRef, useRef, useState } from 'react'
import { ImgMediaCard } from './QuestionCard';
import { makeStyles } from '@mui/styles';
import { mockSequences } from '../assets/data/staticData';
import { minHeight } from '@mui/system';
import { Grid, Slide } from '@mui/material';
import RecommendedList from './RecommendationList';


const useStyles = makeStyles({
    requestsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '80%',
        minHeight: '70vh',
        justifyContent: 'center',
    }
});


const getItems = () =>
    Array(20)
        .fill(0)
        .map((_, ind) => ({
            id: `element-${ind}`,
            answered: false,
            hidden: false,
            ref: createRef()
        }));

const RequestsContatainer = ({ setDoneRequests }) => {
    const classes = useStyles();
    const [items, setItems] = useState(mockSequences);
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const [finishedSequence, setFinishedSequence] = useState(false);
    const containerRef = useRef(null);
    const scrollToNext = (id) => {
        if (id < items.length - 1) {
            if (!!items[currentItemIndex]?.recommendations) {

                setFinishedSequence(true);
                // setCurrentItemIndex(prev => prev + 1);
                setTimeout(() => {
                    setFinishedSequence(false);
                    setCurrentItemIndex(prev => prev + 1);
                }, 5000)
            }
            else
                setCurrentItemIndex(prev => prev + 1);
        }
        else {
            setDoneRequests(true)
        }
    }

    const refs = items.map((item, index) => createRef());
    const itemCards = items.map((item, index) =>
    (
        <ImgMediaCard
            item={item}
            index={index}
            scrollToNext={() => { scrollToNext(index) }}
            key={`currentItemIndex-${index}`}
            containerRef={containerRef}
            currentCard={index === currentItemIndex}
        />
    )
    );

    return (

        <div className={classes.requestsContainer} ref={containerRef}>
            {/* {itemCards} */}
            {!finishedSequence && itemCards[currentItemIndex]}
            {finishedSequence &&
                <RecommendedList recommendations={items[currentItemIndex]?.recommendations} />
            }

        </div>
    )
        ;
}

export default RequestsContatainer