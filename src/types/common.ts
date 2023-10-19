export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
}

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
}

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
}

export type TErrorMessage = {
  message: string,
  status: number
}

export interface Name {
  firstName: string;
  lastName: string;
  middleName: string;
}

export type IAdmin = {
  id: string;
  firstName:    String
  middleName:   String
  lastName:     String
  profileImage: String
  contactNo:    String
  dateOfBirth:  String
  bio:          String
  gender:       GENDER
  bloodGroup:   String
  needsPasswordChange: Boolean
  address:      String
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IEvent {
  id: string;
  title:          String
    organizationId: String
    isBooked:       Boolean      
    description:    String
    eventDate:      String
    facility:       String
    price:          Number
    maxCapacity:    Number
    availableSeats: Number
    eventImg:       String
  createdAt: Date;
  updatedAt: Date;
  // Booking:        Booking[]
  // Review:         Review[]
  // Favorite:       Favorite?
  // availabilities: IAvailability[];
  adminId:        String
}

enum GENDER {
  male,
  female
}

export interface IUser {
  data?: any;
  meta?: any;
}