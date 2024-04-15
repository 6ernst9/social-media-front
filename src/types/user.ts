export type User = {
    userId: string,
    fullName:string;
    username: string,
    password: string,
    profilePhoto: string
}

export type SuggestedFriend = {
    userId: string,
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    dateOfBirth: string,
    description?: string,
    gender: string,
    joinDate: string,
    profilePhoto: string
    commonFriend: User
}