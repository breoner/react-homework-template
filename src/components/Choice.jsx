import React from 'react';
import { ChoiceTitle } from './Stickers.styled';

export const Choice = ({ label }) => {
  return (
    <ChoiceTitle>
      Selected: {label ? <span>{label}</span> : 'None'}
    </ChoiceTitle>
  );
};