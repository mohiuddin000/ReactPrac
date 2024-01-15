import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "../index";
import { service } from "../../Appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } =
        useForm({
            defaultValues: {
                title: post?.title || "",
                slug: post?.slug || "",
                content: post?.content || "",
                status: post?.post || "",
            },
        });
    return <div></div>;
}

export default PostForm;
