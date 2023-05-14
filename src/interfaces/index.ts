import internal from "stream";

export interface IJob {
    job_id: number,
    job_title: string,
    organization:string,
    job_location: string,
    job_type: string,
    job_description: string,
    pay: string,
    recruiterId: number
}