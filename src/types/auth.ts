export interface StoryType {
    src: string;
    user: string;
}

export type AuthState = {
    logged: boolean;
    error: string | null;
    token: string | null;
    userId: number | null;
}