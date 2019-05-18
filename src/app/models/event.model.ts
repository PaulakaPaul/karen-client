import { Submission } from './submission.model';
import { Comment } from './comment.model';

export interface Event {
    eventId: string;
    droneId: string;
    coords: Coords;
    image: string;
    reportedAt: Date;
    comments: Comment[];
    submissions: Submission[];
    status: 'OPENED' | 'CLOSED';
} 

export interface Coords {
    latitude: number;
    longitude: number;
}

export interface EventPostRequest {
    coords: Coords;
    droneId: string;
    image: string;
}