import { Poster } from './submission.model';

export interface Comment {
    commentId: string;
    message: string;
    postedAt: Date;
    postedBy: Poster;
}

export interface CommentPostRequest {
    message: string;
}