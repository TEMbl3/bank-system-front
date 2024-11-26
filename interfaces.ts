import { Types } from "mongoose";

// Интерфейс для user
export interface IUser {
  _id: Types.ObjectId;
  fullName: string;
  email: string;
  phoneNumber: string;
  avatarUrl?: string;
  cards?: Types.ObjectId[];
}

export interface ICard {
  _id: Types.ObjectId;
  paymentSystem: string;
  cardNumber: string;
  cvc: string;
  owner: string;
  expiryDate: string;
  balance: number;
  userId: Types.ObjectId;
}
