import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import service from "../Appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
    const [post, setPost] = useState(null);
    const { slug } = useParams;
    const naviagte = useNavigate();

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                setPost(post);
            });
        } else {
            naviagte("/");
        }
    }, [slug, naviagte]);

    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null;
}

export default EditPost;
