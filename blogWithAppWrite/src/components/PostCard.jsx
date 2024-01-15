import React from "react";
import service from "../Appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featureImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full justify-center mb-4">
                <div className="w-full justify-center mb-4">
                    <img
                        src={service.getFilePriview(featureImage)}
                        alt={title}
                        className="rounded-xl"
                    />
                </div>
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;
