const variantClasses = {
  teal: "bg-transit-teal/10 text-transit-teal",
  amber: "bg-civic-amber/[.16] text-civic-amber-dark",
  red: "bg-signal-red/[.12] text-signal-red",
  navy: "bg-ink-navy/[.08] text-ink-navy",
  "red-dark": "bg-signal-red/[.16] text-[#ff8a80]",
};

export default function IconBadge({ icon: Icon, variant = "teal", className = "" }) {
  return (
    <div className={`w-[46px] h-[46px] rounded-[10px] flex items-center justify-center ${variantClasses[variant]} ${className}`}>
      <Icon className="w-[22px] h-[22px]" />
    </div>
  );
}
