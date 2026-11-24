import { useState } from 'react';
import { Building2 } from 'lucide-react';
import {
  HERO_WORKSPACE_IMAGE,
  ProductShowcase,
  TESTIMONIAL_AVATAR_IMAGE,
} from '../data/portalData';

interface ShowcasePanelProps {
  showcase: ProductShowcase;
}

export function ShowcasePanel({ showcase }: ShowcasePanelProps) {
  const [heroImgFailed, setHeroImgFailed] = useState(false);
  const [avatarImgFailed, setAvatarImgFailed] = useState(false);

  return (
    <section
      aria-label={`${showcase.name} overview`}
      className="relative flex flex-col justify-between overflow-hidden bg-[#0B1F3A] text-white px-8 py-10 sm:px-12 lg:px-14 lg:py-12 min-h-[460px] lg:min-h-full"
    >
      {/* Background Architectural Photography with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        {!heroImgFailed ? (
          <img
            src={HERO_WORKSPACE_IMAGE}
            alt="Executive talent acquisition workspace overlooking city skyline at dusk"
            referrerPolicy="no-referrer"
            onError={() => setHeroImgFailed(true)}
            className="w-full h-full object-cover object-center opacity-45"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#0E2A4F] via-[#0B1F3A] to-[#071426] flex items-center justify-center">
            <Building2 className="w-24 h-24 text-white/10" aria-hidden="true" />
          </div>
        )}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#08172B] via-[#0B1F3A]/85 to-[#0B1F3A]/65"
        />
      </div>

      {/* Top Section: Product Context & Editorial Headline */}
      <div className="relative z-10 max-w-xl">
        <p className="text-xs font-medium tracking-[0.01em] text-slate-300 mb-4">
          {showcase.name} <span aria-hidden="true" className="mx-1.5 text-slate-500">·</span> Enterprise Cloud Portal
        </p>

        <h1 className="font-[var(--font-display)] text-[clamp(1.85rem,3vw,2.75rem)] font-bold leading-[1.14] tracking-[-0.02em] text-white [text-wrap:balance]">
          {showcase.headline}
        </h1>

        <p className="mt-5 text-[15px] leading-[1.65] text-slate-200/90 max-w-[56ch] tracking-[0.005em]">
          {showcase.description}
        </p>

        {/* Quantitative Proof Strip Adjacent to Core Claim */}
        <div className="mt-8 pt-7 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {showcase.metrics.map((metric) => (
            <div key={metric.label}>
              <div className="font-[var(--font-mono)] tabular-nums text-2xl sm:text-[1.75rem] font-semibold tracking-tight text-[#FFC543]">
                {metric.value}
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-300/95">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section: Attributable Customer Outcome */}
      <div className="relative z-10 mt-10 pt-7 border-t border-white/15 max-w-xl">
        <blockquote className="text-sm leading-[1.65] text-slate-100/95">
          &ldquo;{showcase.testimonial.quote}&rdquo;
        </blockquote>

        <div className="mt-4 flex items-center gap-3.5">
          {!avatarImgFailed ? (
            <img
              src={TESTIMONIAL_AVATAR_IMAGE}
              alt={`${showcase.testimonial.author}, ${showcase.testimonial.role}`}
              referrerPolicy="no-referrer"
              onError={() => setAvatarImgFailed(true)}
              className="w-10 h-10 rounded-full object-cover border border-white/20 shrink-0"
            />
          ) : (
            <div
              aria-hidden="true"
              className="w-10 h-10 rounded-full bg-[#132F54] border border-white/20 flex items-center justify-center text-xs font-semibold text-white shrink-0"
            >
              CH
            </div>
          )}
          <div className="min-w-0">
            <div className="text-sm font-semibold text-white leading-tight">
              {showcase.testimonial.author}
            </div>
            <div className="text-xs text-slate-300 mt-0.5 truncate">
              {showcase.testimonial.role} <span aria-hidden="true">·</span> {showcase.testimonial.company}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
