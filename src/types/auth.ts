export interface StoryType {
    src: string;
    user: string;
}

export type AuthState = {
    isLogged: boolean;
    error?: string;
    token: string;
}