import { Subject } from 'rxjs';
import {userType} from "../Types/userType";

const subject = new Subject();

export const formService = {
    sendToForm: (user: userType, tableIndex: string, index: number) => subject.next({user, tableIndex, index}),
    getForForm: () => subject.asObservable(),
};