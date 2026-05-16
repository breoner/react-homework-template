import React, { useState } from "react";
import stickersData from "./sticker.json";
import { Choice } from "./components/Choice";
import { StickerList } from "./components/StickerList";
import { Container } from "./components/Stickers.styled";

function App() {
  const [selectedSticker, setSelectedSticker] = useState("");

  return (
    <Container>
      <Choice label={selectedSticker} />
      <StickerList
        stickers={stickersData}
        onSelectSticker={setSelectedSticker}
        selectedSticker={selectedSticker}
      />
    </Container>
  );
}

export default App;