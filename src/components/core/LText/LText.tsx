import React from "react";

interface TextProps {
    text: string;
    color?: string;
}

const LText: React.FC<TextProps> = ({text, color}) =>{
    return(
        <p style={{ fontSize: 16, color: color}}>{text}</p>
    )
}

export default LText;