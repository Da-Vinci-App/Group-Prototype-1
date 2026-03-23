import React from 'react';

interface BadgeProps {
  text: string;
  icon?: string;
  variant?: 'primary' | 'success' | 'warning' | 'info';
}

const Badge: React.FC<BadgeProps> = ({ text, icon, variant = 'info' }) => {
  const variantClasses = {
    primary: 'bg-primary bg-opacity-10 text-primary',
    success: 'bg-accent bg-opacity-10 text-accent',
    warning: 'bg-secondary bg-opacity-10 text-secondary',
    info: 'bg-blue-100 text-blue-700',
  };

  const iconMap: Record<string, string> = {
    timer: '⏱',
    star: '⭐',
    truck: '🚚',
    discount: '🎉',
    fire: '🔥',
  };

  return (
    <div className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium ${variantClasses[variant]}`}>
      {icon && <span>{iconMap[icon] || icon}</span>}
      <span>{text}</span>
    </div>
  );
};

export default Badge;
