import { StudentListResponse } from "./StudentListResponse";

export interface StudentConversationListResponse extends StudentListResponse {
    reservedTo: Date;
    githubUserName: string;
};