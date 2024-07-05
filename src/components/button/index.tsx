import React, {ButtonHTMLAttributes, useMemo} from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "OUTLINE" | "GHOST" | "SOLID"
}

function Button({className, children, variant = "OUTLINE", ...props}: IProps) {

  const variantStyle = useMemo(() => {
    switch (variant) {
      case "OUTLINE":
        return `bg-white hover:bg-zinc-100 border border-zinc-500 hover:border-zinc-900 text-zinc-600 hover:text-zinc-800`;

      case "GHOST":
        return `bg-white hover:bg-zinc-100 text-zinc-600 hover:text-zinc-800`;

      case "SOLID":
        return `bg-primary hover:bg-primary-600 text-primary-950`;
    }
  }, [variant])

  return (
    <button
      className={`h-[32px] inline-flex items-center justify-center text-center px-5 py-1 font-medium ${variantStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
