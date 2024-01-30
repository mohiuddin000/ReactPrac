import React, { useState } from "react";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import authService from "../Appwrite/auth";

import { useForm } from "react-hook-form";
import { login } from "../Store/AuthSlice";

function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const consoleh = () => {
        console.log("Create account");
    };

    const create = async (data) => {
        console.log("im create function");
        setError("");
        try {
            const userData = await authService.createAccount(data);
            if (userData) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(login(userData));
                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <div className="flex items-center justify-center">
            <div className="w-full mx-auto max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 ">
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">
                    Sign up to create account
                </h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account ? &nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && (
                    <p className="text-red-600 mt-8 text-center">{error}</p>
                )}

                <form
                    onSubmit={handleSubmit(create)}
                    className="flex flex-col items-center justify-items-center pt-4 w-full"
                >
                    <div className="space-y-5  ">
                        <Input
                            label="Name"
                            className="ml-2"
                            placeholder="Enter your name"
                            {...register("name", {
                                required: true,
                            })}
                        />
                        <Input
                            label="Email"
                            placeholder="Enter ypur email"
                            type="email"
                            {...register("email", {
                                required: true,
                                // validate: {
                                //     matchPatern: (value) =>
                                //         /@"^[^\s@]+@[^\s@]+\.[^\s@]+$"/.test(
                                //             value
                                //         ) ||
                                //         "Email address must be a valid address",
                                // },
                            })}
                        />

                        <Input
                            label="Password"
                            placeholder="Enter the password"
                            type="password"
                            className=""
                            {...register("password", {
                                required: true,
                            })}
                        />

                        <Button
                            type="submit"
                            className=" w-full"
                            onClick={consoleh}
                        >
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
