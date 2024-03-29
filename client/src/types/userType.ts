import { DoctorsType } from "./DoctorsType";

export interface UserType {
    _id: string;
    name: string;
    email: string;
    isDoctor: boolean;
    isAdmin: boolean;
    seenNotifications: SeenNotificationType[];
    unseenNotifications: SeenNotificationType[];
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

export interface SeenNotificationType {
    message: string;
    data?: DataType;
    onClickPath: string;
}

export interface DataType {
    doctorId: string;
    name: string;
}

export interface AppointmentsType {
    _id: string;
    createdAt: Date;
    date: Date;
    doctorId: string;
    doctorInfo: DoctorsType;
    status: string;
    time: Date;
    updatedAt: Date;
    userId: string;
    userInfo: UserType;
    __v: number;
}
