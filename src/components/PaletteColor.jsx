import { useState } from "react";

const PaletteColor = () => {

  const colors = ['red', 'green', 'blue'];

  const [color, setColor] = useState('white');

  const changeColor = (colorValue) => {
    setColor(colorValue);
  }

  return(
    <div>
      {colors.map((ele, i) => <button onClick={() => changeColor(ele)} key={i}>{ele}</button>)}
      <div style={{backgroundColor: color}}>Colored Div</div>
    </div>
  )
}

export default PaletteColor;
