import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const AnimationDesigner = () => {
  const [animationStyle, setAnimationStyle] = useState({
    'background-color': '#000000',
    'animation-name': 'my-animation',
    'animation-duration': '1s',
    'animation-timing-function': 'ease',
    'animation-delay': '0s',
    'animation-iteration-count': '1',
    'animation-direction': 'normal',
    'animation-fill-mode': 'both',
    'animation-play-state': 'running',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnimationStyle((prevStyle) => ({
      ...prevStyle,
      [name]: value,
    }));
  };

  const handleColorChange = (color) => {
    setAnimationStyle((prevStyle) => ({
      ...prevStyle,
      'background-color': color.hex,
    }));
  };

  const generateCSS = () => {
    let css = '.my-animation {';
    css += `\n  background-color: ${animationStyle['background-color']};`;
    css += `\n  animation-name: ${animationStyle['animation-name']};`;
    css += `\n  animation-duration: ${animationStyle['animation-duration']};`;
    css += `\n  animation-timing-function: ${animationStyle['animation-timing-function']};`;
    css += `\n  animation-delay: ${animationStyle['animation-delay']};`;
    css += `\n  animation-iteration-count: ${animationStyle['animation-iteration-count']};`;
    css += `\n  animation-direction: ${animationStyle['animation-direction']};`;
    css += `\n  animation-fill-mode: ${animationStyle['animation-fill-mode']};`;
    css += `\n  animation-play-state: ${animationStyle['animation-play-state']};`;
    css += '\n}';

    return css;
  };

  const animationInlineStyle = {
    backgroundColor: animationStyle['background-color'],
    animationName: animationStyle['animation-name'],
    animationDuration: animationStyle['animation-duration'],
    animationTimingFunction: animationStyle['animation-timing-function'],
    animationDelay: animationStyle['animation-delay'],
    animationIterationCount: animationStyle['animation-iteration-count'],
    animationDirection: animationStyle['animation-direction'],
    animationFillMode: animationStyle['animation-fill-mode'],
    animationPlayState: animationStyle['animation-play-state'],
  };

  const resetAnimationStyle = () => {
    setAnimationStyle({
      'background-color': '#000000',
      'animation-name': 'my-animation',
      'animation-duration': '1s',
      'animation-timing-function': 'ease',
      'animation-delay': '0s',
      'animation-iteration-count': '1',
      'animation-direction': 'normal',
      'animation-fill-mode': 'both',
      'animation-play-state': 'running',
    });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">CSS Animation Designer</h1>
      <div className="flex justify-center items-center mb-12">
        <div className="my-animation" style={animationInlineStyle}>
          Animation
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <label className="block mb-2 font-medium">Background Color:</label>
          <ChromePicker
            color={animationStyle['background-color']}
            onChange={handleColorChange}
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">Animation Duration:</label>
          <input 
            type="text" 
            name="animation-duration" 
            value={animationStyle['animation-duration']} 
            onChange={handleChange} 
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">Animation Timing Function:</label>
          <select 
            name="animation-timing-function" 
            value={animationStyle['animation-timing-function']} 
            onChange={handleChange} 
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          >
            <option value="linear">Linear</option>
            <option value="ease">Ease</option>
            <option value="ease-in">Ease-In</option>
            <option value="ease-out">Ease-Out</option>
            <option value="ease-in-out">Ease-In-Out</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-medium">Animation Delay:</label>
          <input 
            type="text" 
            name="animation-delay" 
            value={animationStyle['animation-delay']} 
            onChange={handleChange} 
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">Animation Iteration Count:</label>
          <input 
            type="number" 
            min="1"
            name="animation-iteration-count" 
            value={animationStyle['animation-iteration-count']} 
            onChange={handleChange} 
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">Animation Direction:</label>
          <select 
            name="animation-direction" 
            value={animationStyle['animation-direction']} 
            onChange={handleChange} 
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          >
            <option value="normal">Normal</option>
            <option value="reverse">Reverse</option>
            <option value="alternate">Alternate</option>
            <option value="alternate-reverse">Alternate-Reverse</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-medium">Animation Fill Mode:</label>
          <select 
            name="animation-fill-mode" 
            value={animationStyle['animation-fill-mode']} 
            onChange={handleChange} 
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          >
            <option value="none">None</option>
            <option value="forwards">Forwards</option>
            <option value="backwards">Backwards</option>
            <option value="both">Both</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-medium">Animation Play State:</label>
          <select 
            name="animation-play-state" 
            value={animationStyle['animation-play-state']} 
            onChange={handleChange} 
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          >
            <option value="running">Running</option>
            <option value="paused">Paused</option>
          </select>
        </div>
        <div>
          <button
            onClick={resetAnimationStyle}
            className="px-4 py-2 bg-red-500 text-white rounded-md shadow-sm"
          >
            Reset Animation Style
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">CSS Output</h2>
        <pre className="bg-gray-100 p-4 rounded-lg text-sm">{generateCSS()}</pre>
      </div>
    </div>
  );
};

export default AnimationDesigner;