import React from 'react';
import { Card } from './Stickers.styled';

export const Sticker = ({ img, label, onSelect, isSelected }) => {
  return (
    <Card onClick={() => onSelect(label)} $isSelected={isSelected}>
      <img src={img} alt={label} />
      <p>{label}</p>
    </Card>
  );
};