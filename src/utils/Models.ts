
import mongoose from 'mongoose';

// Define the schema interface
export interface IMarketPlace extends mongoose.Document {
  name: string;
  phoneNo: number;
  email: string;
  product: 'Stationary' | 'Vehicle';
  itemName: string;
  price: number;
  negotiable: boolean;
  image: string;
}
export interface ReviewDocument extends mongoose.Document {
  name: string;
  phoneno: number;
  email: string;
  category: string;
  message: string;
  about: string;
}
export interface PyqDocument extends mongoose.Document {
  department: string;
  subject: string;
  semester: Number | string;
  emailId: string;
  admissionNo: string;
  paperUrl:string;
}

const reviewSchema = new mongoose.Schema<ReviewDocument>(
  {
    name: { type: String, required: true },
    phoneno: { type: Number, required: true },
    email: { type: String, required: true },
    category: { type: String, enum: ['hostel', 'student chapter'], required: true },
    message: { type: String, required: true },
    about: { type: String, required: true },
  },
  { timestamps: true }
);

const Review =mongoose.models.Review || mongoose.model<ReviewDocument>('Review', reviewSchema);
// Define the schema
const pyQSchema = new mongoose.Schema<PyqDocument>(
  {
    department: { type: String, required: true },
    subject: { type: String, required: true },
    emailId: { type: String, required: true },
    semester:{ type: Number, required: true},
    admissionNo: { type: String, required: true },
    paperUrl: { type: String, required: true },
  },
  { timestamps: true }
);

const Papers=mongoose.models.Papers || mongoose.model<PyqDocument>('Papers',pyQSchema);
const marketPlaceSchema = new mongoose.Schema<IMarketPlace>({
  name: { type: String, required: true },
  phoneNo: { type: Number, required: true },
  email: { type: String, required: true },
  product: { type: String, enum: ['Stationary', 'Vehicle'], required: true },
  itemName: { type: String, required: true },
  price: { type: Number, required: true },
  negotiable: { type: Boolean, default: false },
  image: { type: String, required: true },
});

// Create the model
const MarketPlaceModel =mongoose.models.MarketPlaceModel || mongoose.model<IMarketPlace>('MarketPlaceModel', marketPlaceSchema);



  export interface TestimonialData extends mongoose.Document{
  name: string;
  AdmissionNo: string;
  Email: string;
  suggestion: string;
}

// interface TestimonialDocument extends TestimonialData, Document {}

const testimonialSchema = new mongoose.Schema<TestimonialData>(
  {
    name: { type: String, required: true },
    AdmissionNo: { type: String, required: true },
    Email: { type: String, required: true },
    suggestion: { type: String, required: true },
  },
  { timestamps: true }
);

const Testimonial= mongoose.models.Testimonial || mongoose.model<TestimonialData>('Testimonial', testimonialSchema);

const querySchema = new mongoose.Schema<TestimonialData>(
  {
    name: { type: String, required: true },
    AdmissionNo: { type: String, required: true },
    Email: { type: String, required: true },
    suggestion: { type: String, required: true },
  },
  { timestamps: true }
);

const Query= mongoose.models.Query || mongoose.model<TestimonialData>('Query', querySchema);




export {Review,MarketPlaceModel,Testimonial,Query,Papers};
// export {Review,MarketPlaceModel,Testimonial,Papers};
