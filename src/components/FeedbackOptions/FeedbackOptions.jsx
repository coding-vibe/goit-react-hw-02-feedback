import React from 'react';
import PropTypes from "prop-types";
import { OptionsWrapper, Button } from '../FeedbackOptions/FeedbackOptions.styled.js';

const FeedbackOptions = ({ options: { good, neutral, bad }, onLeaveFeedback }) => (
    <OptionsWrapper>
        <Button type='button' onClick={() => onLeaveFeedback(good)}>Good</Button>
        <Button type='button' onClick={() => onLeaveFeedback(neutral)}>Neutral</Button>
        <Button type='button' onClick={() => onLeaveFeedback(bad)}>Bad</Button>
    </OptionsWrapper>
);

FeedbackOptions.propTypes = {
  onClick: PropTypes.func,
};

export default FeedbackOptions;