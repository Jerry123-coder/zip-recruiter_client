import internal from "stream";

export interface IJob {
    job_id: number,
    job_title: string,
    organization:string,
    job_location: string,
    job_type: string,
    job_description: string,
    pay: string,
    recruiterRecruiterId: number
}

export interface IAppliedJob {
    job_id: number,
    job_title: string,
    organization:string,
    job_location: string,
    job_type: string,
    job_description: string,
    pay: string,
    recruiterId: number
    status: string
}

export interface IApplicants {
    application_id:number
    applicant_name: string,
    applicant_email: string,
    job_title:string,
    cv: string,
    cover_letter: string,
    status: string
    applicantApplicantId: number,
    jobJobId: number,
    recruiterRecruiterId: number
    
}