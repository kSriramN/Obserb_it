export type PersonStatus = "ACTIVE" | "ARCHIVED";
export interface Person { id:string; name:string; description?:string; status:PersonStatus; createdAt:string; updatedAt:string; }