import mongoose, { Document, Schema, Types } from 'mongoose';

interface InquiryDocument extends Document {
  name: string;              // Name of the user
  email: string;             // Email of the user
  phone: string;             // Phone number of the user
  company: string;
  comment: string;

}

const inquirySchema = new Schema<InquiryDocument>({
  name:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    // required: true,
  },
  phone:{
    type: String,
    required: true,
  },
    company:{
        type: String,
        required: true,
    },
    comment:{
        type: String,
    },
});

const Inquiry = mongoose.models.Inquiry || mongoose.model<InquiryDocument>('Inquiry', inquirySchema);

export {Inquiry};
export type { inquirySchema };
