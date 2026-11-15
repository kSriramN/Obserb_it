export enum SubjectType { SELF="SELF", PERSON="PERSON" }
export interface Observation { id:string; subjectType:SubjectType; subjectId?:string; content:string; createdAt:string; updatedAt:string; }