'use client'

import Comments from "@/app/components/Comments";


import React, { useState, useEffect } from "react";



const ViewDetails = ({params}) => {
  // console.log(params.id,"dsadkjsdkjsa")

  const id= React.use(params).id
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const result = await response.json();
      setDetails(result); 
    };

    fetchDetails();
  }, [id]);

  return (
    <div className="details-container">
      {details ? (
        <>
          <h3>Details</h3>
          {/* <p><strong>ID:</strong> {details.id}</p>
          <p><strong>User ID:</strong> {details.userId}</p> */}
          <p><strong>Title:</strong> {details.title}<br/><br/>
          <strong>Body:</strong> {details.body}</p>


          <Comments postId={id}/>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewDetails;