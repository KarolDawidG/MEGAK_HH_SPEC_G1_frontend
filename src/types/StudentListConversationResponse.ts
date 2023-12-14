import { contractTypeEnum, workTypeEnum } from "./StudentInterface";

export interface StudentListResponse {
    userId: string;
    firstName: string;
    lastName: string;
    expectedWorkType: workTypeEnum;
    targetWorkCity: string;
    expectedContractType: contractTypeEnum;
    expectedSalary: number;
    canTakeApprenticeship: boolean;
    monthsOfCommercialExperiecne: number;
    projectDegree: number;
    teamProjectDegree: number;
    courseCompletion: number;
    courseEngagement: number;
    reservedTo: Date;
    githubUserName: string;
};