import React from "react";

interface TextProps {
    text: string;
    color?: string;
}

const BText: React.FC<TextProps> = ({text, color}) =>{
    return(
        <p style={{ fontSize: 18, color: color}}>{text}</p>
    )
}

export default BText;