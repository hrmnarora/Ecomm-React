import React from "react";
import { useState } from "react";
import user from "../../assets/user.webp";
import "./SignupPage.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    name: z.string().min(3, { message: "Name should be of min 3 characters" }),
    email: z.string().email({ message: "Enter valid email" }),
    password: z
      .string()
      .min(8, { message: "Password should be of min 8 characters" }),
    cpassword: z.string(),
    deliveryAddress: z
      .string()
      .min(15, { message: "Address must be at least 15 characters" }),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "Password doesn't match",
    path: ["confirmPassword"],
  });

const SignupPage = () => {
const [profilePic, setProfilePic] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = (formData) => console.log(formData);
  console.log(profilePic)
  return (
    <section className="align_center form-page">
      <form
        className="authentication-form signup_form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>SignUp Form</h2>

        <div className="image_input_section">
          <div className="image_preview">
            <img src={profilePic ? URL.createObjectURL(profilePic) : user} id="file-ip-1-preview" />
          </div>
          <label htmlFor="file-ip-1" className="image_label">
            Upload Image
          </label>
          <input onChange={e => setProfilePic(e.target.files[0])} type="file" id="file-ip-1" className="image_input" />
        </div>

        {/* Form Inputs */}
        <div className="form-inputs signup_form_input">
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className="form_text_input"
              type="text"
              placeholder="Enter your name"
              {...register("name")}
            />
            {errors.name && (
              <em className="form_errors">{errors.name.message}</em>
            )}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="form_text_input"
              type="email"
              placeholder="Enter your email address"
              {...register("email")}
            />
            {errors.email && (
              <em className="form_errors">{errors.email.message}</em>
            )}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="form_text_input"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && (
              <em className="form_errors">{errors.password.message}</em>
            )}
          </div>

          <div>
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              id="cpassword"
              className="form_text_input"
              type="password"
              placeholder="Enter confirm password"
              {...register("confirmPassword")}
            />
            {errors.cpassword && (
              <em className="form_errors">{errors.cpassword.message}</em>
            )}
          </div>

          <div className="signup_textares_section">
            <label htmlFor="address">Delivery Address</label>
            <textarea
              id="address"
              className="input_textarea"
              placeholder="Enter delivery address"
              {...register("deliveryAddress")}
            />
            {errors.deliveryAddress && (
              <em className="form_errors">{errors.deliveryAddress.message}</em>
            )}
          </div>
        </div>

        <button className="search-button form-submit" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default SignupPage;

// name - Name should be at least 3 characters.
// email - Please enter valid email
// password - Password must be at least 8 characters.
// confirmPassword - Confirm Password does not match Password
// deliveryAddress - Address must be at least 15 characters.
