import React, { useState } from 'react';
import ColorCard from './../components/ColorCard';

function ColorPaletteGenerator() {
  const [colors, setColors] = useState(generatePalette());

  function generatePalette() {
    let palette = [];
    for(let i = 0; i < 5; i++) {
      palette.push(randomColor());
    }
    return palette;
  }

  function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 100);
    const l = Math.floor(Math.random() * 100);
    return {
      hex: '#' + ((r << 16) | (g << 8) | b).toString(16),
      rgb: `rgb(${r}, ${g}, ${b})`,
      hsl: `hsl(${h}, ${s}%, ${l}%)`
    };
  }

  function refreshPalette() {
    setColors(generatePalette());
  }

  return (
    <div className="p-8">
      <button 
        onClick={refreshPalette} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6"
      >
        Generate New Palette
      </button>
      <div className="flex flex-wrap justify-around">
        {colors.map((color, index) => (
          <ColorCard key={index} color={color.hex} rgb={color.rgb} hsl={color.hsl} />
        ))}
      </div>
    </div>
  );
}

export default ColorPaletteGenerator;
