import { DataListEnvelope, DataEnvelope } from '../model/DataEnvelope';
import { Applicant } from '../../client/src/model/applicant';


const tempApplicant : Applicant = {
    name: "N",
    id: 0,
    email: "n"
};
async function getAll(): Promise<DataListEnvelope<Applicant>> {
    return {
        data: [tempApplicant]
        , // TODO: Replace with actual data source
        isSuccess: true,
        total : 0
    };
}
async function getOne(id: string): Promise<DataEnvelope<Applicant>> {
    return {
        data: {name: "", id:0, email:"cool"}, // TODO: Replace with actual data source
        isSuccess: true
    };
}
async function create(applicant: Applicant): Promise<DataEnvelope<Applicant>> {
    return {
        data: applicant, // TODO: Replace with actual data source
        isSuccess: true
    };
}
async function remove(applicant: Applicant): Promise<DataEnvelope<Applicant>> {
    return {
        data: applicant, // TODO: Replace with actual data source
        isSuccess: true
    };
}
module.exports = { getAll, getOne, create, remove };

