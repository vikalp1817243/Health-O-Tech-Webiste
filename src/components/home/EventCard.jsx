import { Calendar, MapPin, ExternalLink, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export default function EventCard({
  event,
  activePhotoIdx = 0,
  onSelectPhoto,
  onOpenLightbox,
  activeEventIdx = 0,
  totalEvents = 1,
  onPrev,
  onNext,
}) {
  const currentPhoto = event.photos[activePhotoIdx] || event.photos[0];

  return (
    <div className="relative rounded-3xl bg-[var(--surface-card)] border border-[var(--border-accent)] p-6 sm:p-8 lg:p-10 backdrop-blur-2xl shadow-2xl overflow-hidden">
      {/* Ambient Radial Glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ backgroundColor: event.accentGlow || 'var(--accent-green)' }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Column: Event Details & Metrics */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full">
          <div>
            {/* Top Bar inside Card: Left side has Page & Arrow Navigation, Right side has Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              {/* Page and Arrow Count (Top-Left of Event Card) */}
              <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-xl p-1 backdrop-blur-md shadow-sm">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onPrev) onPrev();
                  }}
                  aria-label="Previous Event"
                  className="w-7 h-7 rounded-lg hover:bg-white/10 text-neutral-300 hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-90"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="font-space font-mono text-xs px-2 font-bold tracking-wider text-white select-none">
                  <span className="text-[var(--accent-cyan)]">{String(activeEventIdx + 1).padStart(2, '0')}</span>
                  <span className="text-neutral-500 mx-1">/</span>
                  <span>{String(totalEvents).padStart(2, '0')}</span>
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onNext) onNext();
                  }}
                  aria-label="Next Event"
                  className="w-7 h-7 rounded-lg hover:bg-white/10 text-neutral-300 hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-90"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Event Type & Meta Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`font-orbitron text-[10px] tracking-wider px-3 py-1 rounded-full font-bold uppercase border ${event.badgeClass}`}
                >
                  {event.type}
                </span>
                <span className="font-space text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] text-white flex items-center gap-1.5 border border-white/5">
                  <Calendar className="w-3 h-3 text-[var(--accent-cyan)]" />
                  {event.date}
                </span>
                <span className="font-space text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] text-white flex items-center gap-1.5 border border-white/5">
                  <MapPin className="w-3 h-3 text-rose-400" />
                  {event.location}
                </span>
              </div>
            </div>

            {/* Title & Edition */}
            <h3 className="font-orbitron font-extrabold text-2xl sm:text-3xl text-white mb-2 leading-tight">
              {event.title} <span style={{ color: event.accentColor }}>{event.edition}</span>
            </h3>

            {/* Subtitle / Punchline */}
            <p className="font-space text-xs sm:text-sm text-[var(--accent-cyan)] font-semibold uppercase tracking-wider mb-4">
              {event.subtitle}
            </p>

            {/* Description */}
            <p className="font-space text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
              {event.desc}
            </p>

            {/* Dynamic Highlights / Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {event.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-colors"
                >
                  <div
                    className="font-orbitron font-bold text-base sm:text-lg text-white"
                    style={{ color: idx % 2 === 1 ? event.accentColor : 'white' }}
                  >
                    {m.value}
                  </div>
                  <div className="font-space text-[11px] text-[var(--text-muted)] truncate">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Footnote Hint */}
          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400 font-space italic">
            <span>📸 Click photo to open high-resolution gallery</span>
            <span className="flex items-center gap-1 font-mono text-[10px] text-[var(--accent-cyan)] not-italic uppercase">
              <Sparkles className="w-3 h-3" />
              {event.status}
            </span>
          </div>
        </div>

        {/* Right Column: Interactive Photo Showcase */}
        <div className="lg:col-span-6 flex flex-col gap-3">
          {/* Main Featured Photo Display */}
          <div
            className="relative aspect-video rounded-2xl overflow-hidden border border-[var(--border-accent)] bg-black/60 shadow-xl cursor-pointer group select-none"
            onClick={() => onOpenLightbox(currentPhoto.src)}
          >
            <img
              src={currentPhoto.src}
              alt={currentPhoto.caption}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Gradient Overlay & Caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-4">
              <span className="font-space text-xs sm:text-sm text-white/95 font-medium leading-snug drop-shadow-md">
                {currentPhoto.caption}
              </span>
            </div>

            {/* Expand Hover Badge */}
            <div className="absolute top-3 right-3 p-2 rounded-xl bg-black/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity border border-white/20 shadow-lg">
              <ExternalLink className="w-4 h-4 text-[var(--accent-cyan)]" />
            </div>
          </div>

          {/* Thumbnails Row */}
          <div className="grid grid-cols-4 gap-2">
            {event.photos.map((photo, pIdx) => {
              const isActive = activePhotoIdx === pIdx;
              return (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => onSelectPhoto(pIdx)}
                  className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    isActive
                      ? 'scale-95 shadow-md'
                      : 'border-white/10 opacity-55 hover:opacity-100'
                  }`}
                  style={{
                    borderColor: isActive ? event.accentColor : undefined,
                    boxShadow: isActive ? `0 0 12px ${event.accentColor}80` : undefined,
                  }}
                  title={photo.caption}
                >
                  <img
                    src={photo.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
