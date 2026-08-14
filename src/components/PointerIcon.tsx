import React from 'react';

interface PointerIconProps {
  size?: number;
  color?: string;
  fill?: string;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const PointerIcon: React.FC<PointerIconProps> = ({
  size = 24,
  color = 'var(--text-primary)',
  fill = '#F9A8D4',
  strokeWidth = 6.5,
  className = '',
  style = {},
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
    >
      <path
        d="M28 16 C30 11, 36 11, 38 16 L82 58 C86 62, 84 69, 78 69 L56 69 C52 69, 49 71, 47 74 L34 89 C30 94, 23 91, 23 85 L27 20 C27 18, 27 17, 28 16 Z"
        fill={fill}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
