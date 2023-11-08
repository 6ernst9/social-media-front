export type UserSession = {
    token: string;
    userId: string;
    fullName: string;
    email: string;
    phoneNumber: number;
    username: string;
    language: string;
}

export type UserResponse = {
    token: string;
    userId: string;
    firstName: string;
    lastName: string;
    bio?: string;
    birthdate: string;
    isPrivate: boolean;
    status: boolean;
    profilePicture: string;
    email: string;
    phoneNumber: number;
    username: string;
    language: string;
}