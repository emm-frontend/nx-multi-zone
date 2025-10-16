import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label, ...props }) => (
  <button {...props} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
    {label}
  </button>
);
