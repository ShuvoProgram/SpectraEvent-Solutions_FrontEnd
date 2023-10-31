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
  Review:         IReview[]
  // Favorite:       Favorite?
  // availabilities: IAvailability[];
  adminId:        String
}

export type IFAQ = {
  id:        String
  question:  String
  answer:    String
  createdAt: String;
  updatedAt: String;
  deletedAt?: null;
}

export type ICategory ={
  id:             String
  name:           String
  image:          String
  event:          Event[]
  createdAt:      Date
  updatedAt:      Date
  // AvailableEvent: AvailableEvent
  adminId:        String
}

export type IFavorite = {
  id:      String
    userId:  String
    eventId: String
    createdAt: Date
    updatedAt: Date
}

export type IBlog = {
  id:          String
    contentType: String
    title:       String
    content:     String
    createdAt:   Date
    updatedAt:   Date
    adminId:     String
    review:      IReview[]
}

export type IVanue = {
  id:          String
    title:       String
    createdAt:   Date
    updatedAt:   Date
    event: IEvent[]
}

export type IReview = {
  id:        String
  userId:    String 
  eventId:   String
  rating:    String
  comment:   String
  createdAt: Date
  updatedAt: Date
  blogId:    String
}

export type IBooking = {
  id:        String
  userId:    String
  eventId:   String
  date:      String
  createdAt: Date
  updatedAt: Date
}

export enum GENDER {
  male,
  female
}

export interface IUser {
  data?: any;
  meta?: any;
}

export type IDProps = {
  params: any;
};

export interface IHasSider {
  hasSider?: boolean;
  collapsed?: boolean;
  setCollapsed?: (collapsed: boolean) => void;
}

export type SectionTitle = {
  title: string;
}