"use client";

import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Comments = ({ postId }) => {
const [details, setDetails] = useState([]);

useEffect(() => {
if (!postId) return;  

const fetchDetails = async () => {
    const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/1/comments`
    );
    const result = await response.json();
    setDetails(result);
};

fetchDetails();
}, [postId]);

return (
<div>
    <b className="comments-header">Comments</b>
    {details.map((itt) => {
    return (
        <div key={itt.id} className="card">
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
            <FaUserCircle
                className="user-icon"
                style={{ fontSize: "60px", color: "#aaaaf8" }}
            />{" "}
            <div className="card-content" style={{ margin: "5px 10px" }}>
                <span className="user-name">{itt.name}</span>
                <span className="user-email">{itt.email}</span>
            </div>
            </div>
            <div>
            <p className="user-comment">{itt.body}</p>
            </div>
        </div>
        </div>
    );
    })}
</div>
);
};

export default Comments;
