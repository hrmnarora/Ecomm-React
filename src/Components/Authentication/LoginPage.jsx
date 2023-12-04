import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"

import "./LoginPage.css";

const schema = z.object({
    email: z.string().email({message:"enter valid email"}).min(3),
    password: z.string().min(8,{message:"Password should have at least min 8 characters"})
})

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver: zodResolver(schema)});

  const onSubmit = (formData) => console.log(formData);

  return (
    <section className="align_center form-page">
      <form className="authentication-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>LogIn Form</h2>
        <div className="form-inputs">
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="form-text-input"
              type="email"
              placeholder="Enter Your email address"
              {...register("email")}
            />
            {errors.email && (
              <em className="form-error">{errors.email.message}</em>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="form-text-input"
              type="password"
              placeholder="Enter Your Password"
              {...register("password")}      
            />
            {errors.password && (
              <em className="form-error">{errors.password.message}</em>
            )}
          </div>
          <button className="search-button form-submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
