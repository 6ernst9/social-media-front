export type User ={
    id: number,
    name: string,
    username: string,
    password: string,
    dateOfBirth: string,
    description?: string,
    gender: string,
    joinDate: string,
    profilePhoto: string
}

export type Post = {
    user: User;
    photos: string[];
    postTime: string;
    location?: string;
    description?: string;
    views: number;
    likes: User[];
    comments: Comment[];
}

export type Comment = {
    user: User;
    text: string;
    likes: User[];
    replies: Comment[];
    commTime: string;
}
