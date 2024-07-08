import React, {InputHTMLAttributes} from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string | false
}

function Input({className, name, type, label, error, ...props}: IProps) {
  return (
    <div>
      {label && (
        <label className="block font-medium typo-body">{label}</label>
      )}
      <input
        className={`block w-full h-[32px] border border-zinc-500 px-4 outline-0 focus:border-zinc-800 ${className}`}
        name={name}
        type={type}
        {...props}
      />
      {
        error && (
          <p className="text-red-500 typo-small mt-1">{error}</p>
        )
      }
    </div>
  );
}

export default Input;
