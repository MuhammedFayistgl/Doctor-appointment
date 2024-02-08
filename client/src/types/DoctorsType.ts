export interface DoctorsType {
    _id:                string;
    userId:             string;
    firstName:          string;
    lastName:           string;
    phoneNumber:        string;
    website:            string;
    address:            string;
    specialization:     string;
    experience:         string;
    feePerConsultation: number;
    timings:            string[];
    status:             string;
    createdAt:          Date;
    updatedAt:          Date;
    __v:                number;
}
