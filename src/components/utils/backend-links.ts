const URL_API = 'http://localhost:3001';

export const URL_LOGIN = `${URL_API}/auth/login`;
export const URL_USER = `${URL_API}/auth/user`;
export const URL_LOGOUT = `${URL_API}/auth/logout`;
export const URL_FORGOT_PASSWORD = `${URL_API}/user/change-password`;
export const URL_CHANGE_PASSWORD = `${URL_API}/user/new-password`;
export const URL_IMPORT_USERS = `${URL_API}/user/import`;
export const URL_ADD_HR = `${URL_API}/user/add-hr`;
export const URL_AVAILABLE_STUDENTS = `${URL_API}/student`;
export const URL_TALK_STUDENTS = `${URL_API}/student/conversation-list`;

//HR function URL
const URL_HR = `${URL_API}/hr-profile`;
export const URL_ADD_STUDENT_TO_CONVERSTAION = `${URL_HR}/choose-student`;
export const URL_ADD_STUDENT_TO_HIRE = `${URL_HR}/student/hire`;
export const URL_DEL_STUDENT_TO_CONVERSTAION = `${URL_HR}/student/cancel`;
