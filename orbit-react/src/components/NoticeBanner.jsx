import Container from "./Container";

export default function NoticeBanner() {
  return (
    <div className="bg-ink-navy text-paper font-mono text-[0.82rem] tracking-[0.02em] border-b border-white/10">
      <Container className="flex items-center justify-between gap-4 py-2 flex-wrap text-[0.78rem] sm:text-[0.82rem]">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-civic-amber flex-shrink-0 animate-ping" aria-hidden="true"></span>
          <span>
            <strong className="text-civic-amber">Citizen Advisory:</strong> Ward 7 to 12 scheduled Jal Board pipeline upgrade on Saturday, 6:00 AM – 10:00 AM IST.
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-paper/70 font-mono text-[0.75rem]">
          <span>Toll-Free: <strong className="text-paper">1800-425-2026</strong></span>
          <span>Emergency: <strong className="text-civic-amber">112</strong></span>
        </div>
      </Container>
    </div>
  );
}
