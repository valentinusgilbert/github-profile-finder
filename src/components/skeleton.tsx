"use client";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`relative overflow-hidden rounded-md bg-gray-200 ${className}`}
      {...props}
    >
      <div className="absolute inset-0 -translate-x-full animate-[move_1s_linear_infinite] bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
      <style jsx>{`
        @keyframes move {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}

export { Skeleton };
