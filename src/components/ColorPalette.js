import React from 'react'

export default function ColorPalette(props) {

    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 
    'turquoise', 'purple', 'pink', 'deeppink', 'chocolate', 
    "Chartreuse", "DarkCyan", "IndianRed", "LightSalmon", "MediumAquaMarine", "SeaGreen", "Teal"];

    
    return(
        <div className="color-palette">
            {colors.map(color=> { 
                const activeClass = props.currentColor === color ? 'color-swatch-active' : '';
                return (
                    <div onClick={() => {props.changeColor(color)}, console.log(color)}>
                        <div className={`color-swatch ${activeClass}`}  style={{backgroundColor: color}}></div>
                    </div>
                )
            })}
        </div>
    )
        
}