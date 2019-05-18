import { Submission } from './submission.model';
import { Comment } from './comment.model';

export interface Marker {
    markerId: string;
    latitude: number;
    longitude: number;
    image: string;
    comments: Comment[];
    submissions: Submission[];
} 