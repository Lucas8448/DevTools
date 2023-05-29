import React from 'react';

function ColorCard({ color, rgb, hsl }) {
  let rgbValues = rgb.match(/\b\d+\b/g).map(Number);
  let luminance = 0.2126 * rgbValues[0]/255 + 0.7152 * rgbValues[1]/255 + 0.0722 * rgbValues[2]/255;
  let textColor = luminance > 0.5 ? 'black' : 'white'
  return (
    <div className="w-1/5 h-40 flex flex-col items-center justify-center rounded-lg m-4 shadow-lg" style={{ backgroundColor: color }}>
      <p className="text-sm font-bold mb-2" style={{ color: textColor }}>HEX: {color}</p>
      <p className="text-sm font-bold mb-2" style={{ color: textColor }}>RGB: {rgb}</p>
      <p className="text-sm font-bold" style={{ color: textColor }}>HSL: {hsl}</p>
    </div>
  );
}

export default ColorCard;