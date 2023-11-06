export type UserSession = {
    token: string | null;
    userId: string | null;
    fullName: string | null;
    email: string | null;
    phoneNumber: number | null;
    username: string | null;
    language: string | null;
}