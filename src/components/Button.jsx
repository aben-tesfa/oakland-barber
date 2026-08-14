import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  target,
  rel,
  className = '',
  icon,
  iconPosition = 'right',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brass/50 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 tracking-wider uppercase gap-1.5',
    md: 'text-sm px-5 py-2.5 tracking-wider uppercase gap-2',
    lg: 'text-base px-7 py-3.5 tracking-wider uppercase gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary: 'bg-brass text-studio-950 hover:bg-brass-light active:bg-brass-dark shadow-sm font-semibold',
    secondary: 'bg-studio-800 text-studio-100 hover:bg-studio-700 active:bg-studio-900 border border-studio-700',
    outline: 'border border-brass/60 text-brass hover:bg-brass/10 active:bg-brass/20',
    ghost: 'text-studio-300 hover:text-studio-100 hover:bg-studio-800/50',
    dark: 'bg-studio-900 text-studio-100 hover:bg-studio-850 border border-white/10',
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClass} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClass} {...props}>
      {content}
    </button>
  );
}
