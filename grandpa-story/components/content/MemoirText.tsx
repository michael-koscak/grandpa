interface MemoirTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function MemoirText({ children, className = '' }: MemoirTextProps) {
  return (
    <div className={`memoir-text ${className}`}>
      {children}
    </div>
  );
}
