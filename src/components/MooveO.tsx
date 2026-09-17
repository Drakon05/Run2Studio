export default function MooveO({ className = "" }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 149 40" 
      fill="none"
      className={className}
      aria-label="O"
    >
      <rect x="5" y="5" width="139" height="30" rx="15" stroke="currentColor" stroke-width="10" />
    </svg>
  );
}
