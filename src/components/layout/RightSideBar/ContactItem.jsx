// src/components/sidebar/ContactItem.jsx
import React from "react";

const ContactItem = ({ avatar, name }) => {
  return (
    <div className="flex items-center gap-3">
      <img
        src={avatar}
        alt={name}
        className="w-8 h-8 rounded-full object-cover"
      />
      <p className="text-sm text-gray-800 dark:text-[#f4f4f5]">{name}</p>
    </div>
  );
};


export default ContactItem;
