'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ChevronDown, Play, Quote, X } from 'lucide-react'
import { Reveal } from './reveal'

export type Review = { name: string; since: string; detail: string; image: string; quote: string }
export type GalleryVideo = { title: string; src: string }
export type FAQItem = { question: string; answer: string }

function GalleryTile({ video, onSelect }: { video: GalleryVideo; onSelect: () => void }) {
  const tileRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const tile = tileRef.current
    if (!tile) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (tile.src) return
        tile.src = video.src
        tile.load()
        return
      }

      tile.pause()
    }, { rootMargin: '100px' })

    observer.observe(tile)
    return () => {
      observer.disconnect()
      tile.pause()
    }
  }, [video.src])

  return <button type="button" onClick={onSelect} className="group relative aspect-[9/14] w-full overflow-hidden rounded-xl bg-[#0a0a0b] text-left" aria-label={`Play ${video.title} video`}><video ref={tileRef} muted playsInline preload="metadata" className="h-full w-full object-cover opacity-75 transition group-hover:opacity-100" /><span className="absolute inset-0 grid place-items-center"><span className="grid size-12 place-items-center rounded-full border border-white/60 bg-black/45 text-white backdrop-blur-sm transition group-hover:scale-110 group-hover:border-[#c6ff00] group-hover:bg-[#c6ff00] group-hover:text-black sm:size-14"><Play className="ml-1 size-5 fill-current" /></span></span><span className="absolute inset-x-3 bottom-3 text-xs font-bold uppercase sm:inset-x-4 sm:bottom-4 sm:text-sm">{video.title}</span></button>
}

export function VideoGallery({ videoGallery }: { videoGallery: readonly GalleryVideo[] }) {
  const [active, setActive] = useState<number | null>(null)
  const pauseOthers = (current: HTMLVideoElement) => document.querySelectorAll('video').forEach(video => { if (video !== current) video.pause() })
  useEffect(() => { const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setActive(null) }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close) }, [])
  return <section className="border-y border-white/10 bg-[#111113] py-24 lg:py-36"><div className="mx-auto max-w-[1360px] px-5 lg:px-10"><Reveal><div className="mb-12"><p className="mb-5 font-mono text-xs uppercase tracking-[.3em] text-[#c6ff00]">06 / In motion</p><h2 className="font-display text-5xl font-bold uppercase md:text-7xl">Train in<br /><span className="text-[#c6ff00]">real time.</span></h2></div></Reveal><div className="grid grid-cols-2 gap-3 md:grid-cols-4">{videoGallery.map((video, index) => <Reveal key={video.src} delay={index * .04}><GalleryTile video={video} onSelect={() => setActive(index)} /></Reveal>)}</div></div><AnimatePresence>{active !== null && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)} className="fixed inset-0 z-50 grid place-items-center bg-black/90 p-5" role="dialog" aria-modal="true"><motion.div onClick={event => event.stopPropagation()} className="relative max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-[#111113]"><button type="button" onClick={() => setActive(null)} className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-black/70" aria-label="Close video"><X /></button><video key={videoGallery[active].src} autoPlay controls playsInline onPlay={event => pauseOthers(event.currentTarget)} className="max-h-[92vh] w-full object-contain"><source src={videoGallery[active].src} type="video/mp4" /></video></motion.div></motion.div>}</AnimatePresence></section>
}

export function Reviews({ reviews }: { reviews: readonly Review[] }) {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const reduce = useReducedMotion()
  const go = (index: number, nextDirection: number) => { setDirection(nextDirection); setActive((index + reviews.length) % reviews.length) }
  useEffect(() => { if (paused || reduce) return; const timer = window.setInterval(() => go(active + 1, 1), 6000); return () => window.clearInterval(timer) }, [active, paused, reduce])
  const review = reviews[active]
  return <section id="reviews" className="border-y border-white/10 bg-[#111113] py-24 lg:py-36"><div className="mx-auto max-w-[1360px] px-5 lg:px-10"><Reveal><p className="mb-5 font-mono text-xs uppercase tracking-[.3em] text-[#c6ff00]">07 / Member stories</p><h2 className="font-display text-5xl font-bold uppercase md:text-7xl">Real work.<br /><span className="text-[#c6ff00]">Real change.</span></h2></Reveal><Reveal delay={.1}><div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0b]" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}><AnimatePresence mode="wait" initial={false}><motion.div key={active} initial={reduce ? false : { x: direction * 80 }} animate={{ x: 0 }} exit={{ x: direction * -80 }} transition={{ duration: .45, ease: 'easeOut' }} drag={reduce ? false : 'x'} dragConstraints={{ left: 0, right: 0 }} dragElastic={0.18} onDragEnd={(_, info) => { const swipe = info.offset.x + info.velocity.x * 0.15; if (swipe < -80) go(active + 1, 1); else if (swipe > 80) go(active - 1, -1) }} className="grid touch-pan-y cursor-grab select-none lg:grid-cols-[.85fr_1.15fr] active:cursor-grabbing"><div className="relative min-h-[340px] overflow-hidden sm:min-h-[440px]"><Image src={review.image} alt={`${review.name} training at Soul Fitness`} fill sizes="(min-width: 1024px) 42vw, 100vw" className="pointer-events-none object-cover transition duration-700" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:bg-gradient-to-r" /><div className="absolute inset-x-6 bottom-6 lg:hidden"><p className="font-mono text-xs uppercase tracking-[.2em] text-[#c6ff00]">{review.since}</p><h3 className="mt-2 text-xl font-bold uppercase">{review.name}</h3></div></div><div className="flex flex-col justify-between p-7 sm:p-12 lg:p-16"><div><div className="flex items-start justify-between gap-6"><Quote className="size-10 text-[#c6ff00]" /><span className="font-mono text-xs text-white/35">{String(active + 1).padStart(2, '0')} / {String(reviews.length).padStart(2, '0')}</span></div><blockquote className="mt-10 font-display text-3xl font-bold uppercase leading-[.98] sm:text-5xl">“{review.quote}”</blockquote></div><div className="mt-12 border-t border-white/10 pt-6"><div className="flex items-end justify-between gap-6"><div><h3 className="text-lg font-bold uppercase">{review.name}</h3><p className="mt-1 text-xs uppercase tracking-[.12em] text-white/40">{review.since} / {review.detail}</p></div><div className="flex shrink-0 gap-2"><button type="button" onClick={() => go(active - 1, -1)} className="grid size-11 place-items-center rounded-full border border-white/15 transition hover:border-[#c6ff00] hover:text-[#c6ff00]" aria-label="Previous review"><ArrowLeft className="size-4" /></button><button type="button" onClick={() => go(active + 1, 1)} className="grid size-11 place-items-center rounded-full border border-white/15 transition hover:border-[#c6ff00] hover:text-[#c6ff00]" aria-label="Next review"><ArrowRight className="size-4" /></button></div></div><div className="mt-7 flex items-center gap-2" role="tablist" aria-label="Choose member story">{reviews.map((item, index) => <button key={item.name} type="button" role="tab" aria-selected={active === index} aria-label={`Show ${item.name}'s story`} onClick={() => go(index, index >= active ? 1 : -1)} className={`h-1.5 rounded-full transition-all ${active === index ? 'w-10 bg-[#c6ff00]' : 'w-5 bg-white/20 hover:bg-white/50'}`} />)}</div></div></div></motion.div></AnimatePresence></div></Reveal></div></section>
}

export function FAQ({ faqs }: { faqs: readonly FAQItem[] }) {
  const [active, setActive] = useState<number | null>(null)
  return <section className="mx-auto max-w-3xl px-5 py-24 lg:py-32"><Reveal><p className="mb-5 font-mono text-xs uppercase tracking-[.3em] text-[#c6ff00]">08 / Good to know</p><h2 className="font-display text-5xl font-bold uppercase md:text-7xl">Questions<span className="text-[#c6ff00]">?</span></h2><div className="mt-10 divide-y divide-white/10 border-y border-white/10">{faqs.map((faq, index) => <div key={faq.question}><button onClick={() => setActive(active === index ? null : index)} className="flex w-full items-center justify-between gap-6 py-6 text-left text-base font-bold uppercase sm:text-lg" aria-expanded={active === index}>{faq.question}<ChevronDown className="size-6 shrink-0 text-[#c6ff00] transition sm:size-7" /></button>{active === index && <p className="pb-6 text-base leading-relaxed text-white/50 sm:text-lg">{faq.answer}</p>}</div>)}</div></Reveal></section>
}
