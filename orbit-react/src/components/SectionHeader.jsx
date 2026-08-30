export default function SectionHeader({ eyebrow, title, description, className = "", eyebrowClassName = "", center = false }) {
  return (
    <div className={`max-w-[640px] mb-12 ${center ? "mx-auto text-center" : ""} ${className}`}>
      <span
        className={`inline-block font-mono text-[0.72rem] tracking-[0.14em] uppercase text-transit-teal bg-transit-teal/[.09] px-[10px] py-1 rounded-full mb-[14px] ${eyebrowClassName}`}
      >
        {eyebrow}
      </span>
      <h2 className="text-[1.7rem] md:text-[2.4rem] mb-3">{title}</h2>
      <p className="text-slate-light text-[1.02rem]">{description}</p>
    </div>
  );
}
