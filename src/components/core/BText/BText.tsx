import React from "react";

interface TextProps {
    text: string;
    color?: string;
    onClick?: () => void;
}

const BText: React.FC<TextProps> = ({text, color, onClick}) =>{
    return(
        <p style={{ fontSize: 18, fontWeight: 'bold', color: color}} onClick={onClick}>{text}</p>
    )
}

export default BText;