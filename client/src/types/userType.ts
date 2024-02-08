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
}

export interface DataType {
    doctorId: string;
    name: string;
}
