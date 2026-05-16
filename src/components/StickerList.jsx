import React from 'react';
import { Sticker } from './Sticker';
import { List } from './Stickers.styled';

export const StickerList = ({ stickers, onSelectSticker, selectedSticker }) => {
  return (
    <List>
      {stickers.map((sticker) => (
        <Sticker
          key={sticker.label}
          img={sticker.img}
          label={sticker.label}
          onSelect={onSelectSticker}
          isSelected={selectedSticker === sticker.label}
        />
      ))}
    </List>
  );
};