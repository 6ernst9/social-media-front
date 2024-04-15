export type Content = {
    id: string;
    posterId: string;
    url: string;
    type: string;
    timestamp: string;
    seen: number[];
    receivers: number[]
}

export type Comment = {
    userProfilePhoto: string;
    userUsername: string;
    text: string;
    likes: number;
    replies: Comment[];
    commTime: string;
}
