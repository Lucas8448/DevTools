import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const ButtonDesigner = () => {
  const [buttonStyle, setButtonStyle] = useState({
    'background-color': '#000000',
    color: '#ffffff',
    fontSize: '16px',
    paddingVertical: '10px',
    paddingHorizontal: '20px',
    border: 'none',
    borderColor: '#000000',
    borderRadius: '4px',
    cursor: 'pointer',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setButtonStyle((prevStyle) => ({
      ...prevStyle,
      [name]: value,
    }));
  };

  const handleColorChange = (color, name) => {
    setButtonStyle((prevStyle) => ({
      ...prevStyle,
      [name]: color.hex,
    }));
  };

  const generateCSS = () => {
    let css = '.my-button {';
    css += `\n  background-color: ${buttonStyle['background-color']};`;
    css += `\n  color: ${buttonStyle.color};`;
    css += `\n  font-size: ${buttonStyle.fontSize};`;
    css += `\n  padding: ${buttonStyle.paddingVertical} ${buttonStyle.paddingHorizontal};`;
    css += `\n  border: ${buttonStyle.border};`;
    css += `\n  border-color: ${buttonStyle.borderColor};`;
    css += `\n  border-radius: ${buttonStyle.borderRadius};`;
    css += `\n  cursor: ${buttonStyle.cursor};`;
    css += '\n}';

    return css;
  };

  const buttonInlineStyle = {
    backgroundColor: buttonStyle['background-color'],
    color: buttonStyle.color,
    fontSize: buttonStyle.fontSize,
    padding: `${buttonStyle.paddingVertical} ${buttonStyle.paddingHorizontal}`,
    border: buttonStyle.border,
    borderColor: buttonStyle.borderColor,
    borderRadius: buttonStyle.borderRadius,
    cursor: buttonStyle.cursor,
  };

  const resetButtonStyle = () => {
    setButtonStyle({
      'background-color': '#000000',
      color: '#ffffff',
      fontSize: '16px',
      paddingVertical: '10px',
      paddingHorizontal: '20px',
      border: 'none',
      borderColor: '#000000',
      borderRadius: '4px',
      cursor: 'pointer'
    });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">CSS Button Designer</h1>
      <div className="flex justify-center items-center mb-12">
        <button className="my-button" style={buttonInlineStyle}>
          Button
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <label className="block mb-2 font-medium">Background Color:</label>
          <ChromePicker
            color={buttonStyle['background-color']}
            onChange={(color) => handleColorChange(color, 'background-color')}
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">Text Color:</label>
          <ChromePicker
            color={buttonStyle.color}
            onChange={(color) => handleColorChange(color, 'color')}
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">Border Color:</label>
          <ChromePicker
            color={buttonStyle.borderColor}
            onChange={(color) => handleColorChange(color, 'borderColor')}
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">Font Size:</label>
          <select
            name="fontSize"
            value={buttonStyle.fontSize}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          >
            <option value="12px">12px</option>
            <option value="14px">14px</option>
            <option value="16px">16px</option>
            <option value="18px">18px</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-medium">Padding Vertical:</label>
          <select
            name="paddingVertical"
            value={buttonStyle.paddingVertical}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          >
            <option value="5px">5px</option>
            <option value="10px">10px</option>
            <option value="15px">15px</option>
            <option value="20px">20px</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-medium">Padding Horizontal:</label>
          <select
            name="paddingHorizontal"
            value={buttonStyle.paddingHorizontal}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          >
            <option value="5px">5px</option>
            <option value="10px">10px</option>
            <option value="15px">15px</option>
            <option value="20px">20px</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-medium">Border:</label>
          <select
            name="border"
            value={buttonStyle.border}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          >
            <option value="none">None</option>
            <option value="1px solid">1px Solid</option>
            <option value="2px solid">2px Solid</option>
            <option value="dotted">Dotted</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-medium">Border Radius:</label>
          <select
            name="borderRadius"
            value={buttonStyle.borderRadius}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          >
            <option value="0">None</option>
            <option value="4px">4px</option>
            <option value="8px">8px</option>
            <option value="12px">12px</option>
            <option value="16px">16px</option>
            <option value="20px">20px</option>
            <option value="24px">24px</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-medium">Cursor:</label>
          <select
            name="cursor"
            value={buttonStyle.cursor}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          >
            <option value="pointer">Pointer</option>
            <option value="default">Default</option>
            <option value="text">Text</option>
            <option value="wait">Wait</option>
            <option value="crosshair">Crosshair</option>
            <option value="move">Move</option>
          </select>
        </div>
        <div>
          <button
            onClick={resetButtonStyle}
            className="px-4 py-2 bg-red-500 text-white rounded-md shadow-sm"
          >
            Reset Button Style
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

export default ButtonDesigner;