import React, {useState} from "react";
import './styles.css';

interface SendSnapCardProps {
    id: string,
    profilePhoto: string,
    fullName: string,
    streak: number,
    onSelect: (id: string) => void;
    onDeselect: (id: string) => void;
}

const SendSnapCard: React.FC<SendSnapCardProps> = ({id, profilePhoto, streak, onSelect, onDeselect, fullName}) => {
    const [selected, setSelected] = useState(false);

    const select = () => {
        if(selected) {
            setSelected(false);
            onDeselect(id);
        } else {
            setSelected(true);
            onSelect(id);
        }
    }

    return (
        <div className='chat-overview-send-snap-card'>
            <div className='chat-overview-send-snap-card-head'>
                <img className='chat-overview-send-snap-card-profile' src={profilePhoto}/>
                <p className={'chat-overview-send-snap-card-name' + (selected ? '-selected' : '')}>{fullName}</p>
            </div>
            <div className='chat-overview-send-snap-card-tail'>
                <p className={'chat-overview-send-snap-streak' + (selected ? '-selected' : '')}>{streak}</p>
                <div className={'chat-overview-send-snap-card-selector' + (selected ? '-selected' : '')} onClick={select}/>
            </div>
        </div>
    )
}

export default SendSnapCard;