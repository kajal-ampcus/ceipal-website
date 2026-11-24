interface CeipalLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export function CeipalLogo({ variant = 'light', className = '' }: CeipalLogoProps) {
  const textColor = variant === 'dark' ? 'text-white' : 'text-[#0B1F3A]';

  return (
    <span
      className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 select-none ${className}`}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M16 3C8.82 3 3 8.82 3 16C3 23.18 8.82 29 16 29C20.24 29 24.01 26.97 26.39 23.82L21.92 20.54C20.53 22.35 18.39 23.5 16 23.5C11.86 23.5 8.5 20.14 8.5 16C8.5 11.86 11.86 8.5 16 8.5C18.39 8.5 20.53 9.65 21.92 11.46L26.39 8.18C24.01 5.03 20.24 3 16 3Z"
          fill="#F46933"
        />
        <path
          d="M28.5 16C28.5 13.74 27.92 11.61 26.9 9.76L22.25 13.18C22.73 14.02 23 14.98 23 16C23 17.02 22.73 17.98 22.25 18.82L26.9 22.24C27.92 20.39 28.5 18.26 28.5 16Z"
          fill="#FFC543"
        />
        <circle cx="16" cy="16" r="3.1" fill={variant === 'dark' ? '#FFFFFF' : '#0B1F3A'} />
      </svg>
      <span
        className={`font-[var(--font-display)] text-[1.35rem] font-extrabold tracking-[-0.03em] leading-none ${textColor}`}
      >
        ceipal
      </span>
    </span>
  );
}
