import {Message} from "../widgets/messaging-overview-widget/model/types";

interface UtilParameters {
    messages: Message[];
    index: number;
}

export const getMessageShape = ({messages, index}: UtilParameters) => {
    let firstCorner: boolean = false;
    let secondCorner: boolean = false;
    if(index === 0) {
        firstCorner = true;
    }
    else if(index === messages.length - 1) {
        secondCorner = true;
    } else {
        if(messages[index-1].sender.userId !== messages[index].sender.userId)
            firstCorner = true;
        if(messages[index + 1].sender.userId !== messages[index].sender.userId)
            secondCorner = true;
    }
    return [firstCorner, secondCorner];
}