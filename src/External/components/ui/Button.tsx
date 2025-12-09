import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, className = '', ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`bg-blue-600 hover:bg-blue-800 text-white rounded-md px-4 py-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${className}`}
      aria-label={props['aria-label'] || (typeof children === 'string' ? children : 'Botón')}
    >
      {children}
    </button>
  );
};
