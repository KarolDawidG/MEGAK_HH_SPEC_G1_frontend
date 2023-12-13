export enum workTypeEnum {
  noPreferences = 0,
  onSite = 1,
  relocation = 2,
  remote = 3,
  hybrid = 4,
}

export enum contractTypeEnum {
  noPreferences = 0,
  UoP = 1,
  B2B = 2,
  UZorUoD = 3,
}

export enum studentStatus {
  available = 0,
  duringConversation = 1,
  engaged = 2,
}

export interface StudentInterfaceMain {
  userId: string;
  firstName: string;
  lastName: string;
}

export interface StudentInterface {
  userId: string,    // User id
  firstName: string,  // User first name
  lastName: string,  // User last name
  expectedWorkType: number,  // Expected work type
  targetWorkCity: string,  // Target work city
  expectedContractType: number,  // Expected contract type
  expectedSalary: number,  // Expected salary
  canTakeApprenticeship: boolean, // Can take apprenticeship
  monthsOfCommercialExperience: number, // Months of user commercial experience
  projectDegree: number, // Project degree
  teamProjectDegree: number, // Team project degree
  courseCompletion: number, // Course completion degree
  courseEngagemnet: number // Course engagement degree
}
