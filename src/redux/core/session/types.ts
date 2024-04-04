export type UserSession = {
    token: string;
    userId: string;
    fullName: string;
    email: string;
    phoneNumber: number;
    profilePicture: string;
    username: string;
}

export type UserResponse = {
    token: string;
    user: UserType;
}

export type UserType = {
    userId: string;
    fullName: string;
    birthdate: string;
    isPrivate: boolean;
    email: string;
    phoneNumber: number;
    profilePicture: string;
    username: string;
}