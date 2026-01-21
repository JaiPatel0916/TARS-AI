export function Card({ children, className }) {
  return (
    <div
     
    >
      {/* Subtle Purple Glow */}
      <div className="absolute inset-0 bg-purple-900/10 blur-[120px] -z-10"></div>

      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return (
    <div className="p-6 text-xl font-semibold text-pink-400 tracking-wide">
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return (
    <div className="p-6 pt-0 text-gray-200 text-sm leading-relaxed">
      {children}
    </div>
  );
}
