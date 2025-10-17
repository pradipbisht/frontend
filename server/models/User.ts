import mongoose from "mongoose";

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  preferences: {
    interests: string[]; // ['Health', 'Skincare', 'Pets', etc.]
    newsletter: boolean;
  };
  profile: {
    age?: number;
    gender?: "male" | "female" | "other";
    location?: string;
  };
  isVerified: boolean;
  isActive: boolean;
  role: "user" | "admin";
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [50, "Name must be less than 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    avatar: {
      type: String,
      default: "",
    },
    preferences: {
      interests: [
        {
          type: String,
          enum: [
            "Health",
            "Lifestyle",
            "Skincare",
            "Haircare",
            "Pets",
            "Parenting",
          ],
        },
      ],
      newsletter: {
        type: Boolean,
        default: true,
      },
    },
    profile: {
      age: {
        type: Number,
        min: [13, "Must be at least 13 years old"],
        max: [120, "Invalid age"],
      },
      gender: {
        type: String,
        enum: ["male", "female", "other"],
      },
      location: {
        type: String,
        trim: true,
      },
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for better performance
UserSchema.index({ "preferences.interests": 1 });
UserSchema.index({ createdAt: -1 });

// Prevent password from being returned in JSON
UserSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);
