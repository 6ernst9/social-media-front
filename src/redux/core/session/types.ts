export type UserSession = {
    token: string;
    id: string;
    fullName: string;
    email: string;
    phoneNumber: number;
    profilePhoto: string;
    username: string;
}

export type UserResponse = {
    token: string;
    user: UserType;
}

export type UserType = {
    id: string;
    fullName: string;
    email: string;
    phoneNumber: number;
    profilePhoto: string;
    username: string;
}