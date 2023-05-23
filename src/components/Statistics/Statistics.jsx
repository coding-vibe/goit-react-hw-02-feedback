import React from 'react';
import Notification from '../Notification';
import { Title, Data, Percentage } from '../Statistics/Statistics.styled.js';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div>
        <Title>Statistics</Title>
        {good || neutral || bad > 0 ? (
            <>
                <Data>Good: {good}</Data>
                <Data>Neutral: {neutral}</Data>
                <Data>Bad: {bad}</Data>
                <Data>Total: {total}</Data>
                <Data>Positive feedback: <Percentage>{positivePercentage}%</Percentage> </Data>
            </>
        ) : (
            <Notification message="There is no feedback" />
        )}
    </div>
);

export default Statistics;