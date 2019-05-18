export interface Comment {
    userId: string; // UUID
    name: string;
    text: string;
}

export interface CommentPostRequest {
    userId: string;
    text: string;
}