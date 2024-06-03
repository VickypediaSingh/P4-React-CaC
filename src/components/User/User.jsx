import React from "react";
import { useParams } from "react-router-dom";

function User() {
  // const userid = useParams();    page wont work
  const { userid } = useParams();
  return (
    <div className="bg-gray-700 text-white text-2xl p-4">
      User Name: {userid}
    </div>
  );
}

export default User;
