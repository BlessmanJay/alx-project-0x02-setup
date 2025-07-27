import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-semibold text-purple-700">{user.name}</h2>
      <p className="text-gray-700">{user.email}</p>
      <p className="text-sm text-gray-500">
        {user.address.street}, {user.address.suite}, {user.address.city},{" "}
        {user.address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
