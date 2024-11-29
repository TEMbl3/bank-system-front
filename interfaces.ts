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

export interface ITransfer {
  _id: Types.ObjectId;
  senderCard: string;
  senderName: string;
  recipientCard: string;
  recipientName: string;
  amount: number;
  createdAt: Date;
}
