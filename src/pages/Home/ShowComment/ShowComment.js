import React from "react";
import { useQuery } from "@tanstack/react-query";

const ShowComment = () => {
  const { data: comments = [] } = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      fetch("http://localhost:5000/comment").then((res) => res.json()),
  });

  return (
    <div className="my-20">
      <h1 className="text-4xl font-semibold text-center mb-10">
        Users Comment
      </h1>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 ">
        {comments.map((comment) => (
          <div key={comment._id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{comment.name}</h2>
                <p>{comment.email}</p>
                <p>{comment.message}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowComment;
