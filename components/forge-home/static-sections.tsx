import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'
import { ScrollLink } from './scroll-link'

export function Contact() {
  return <section id="contact" className="border-t border-white/10 bg-[#c6ff00] px-4 py-20 text-black sm:px-5 sm:py-24 lg:px-10 lg:py-36"><div className="mx-auto flex max-w-[1360px] flex-col justify-between gap-10 sm:gap-12 lg:flex-row lg:items-end"><Reveal><p className="mb-5 font-mono text-[10px] uppercase tracking-[.25em] sm:mb-6 sm:text-xs sm:tracking-[.3em]">09 / Your next move</p><h2 className="font-display text-[clamp(3.5rem,16vw,9rem)] font-black uppercase leading-[.8]">Make<br />it real<span className="text-white">.</span></h2></Reveal><Reveal delay={.12}><div className="max-w-sm"><p className="text-base leading-relaxed sm:text-lg">Stop waiting for the perfect time. Your strongest chapter starts with one decision.</p><a href="mailto:hello@forge.training" className="mt-7 inline-flex min-h-11 items-center rounded-full bg-black px-6 py-3 text-xs font-bold uppercase text-white sm:mt-8 sm:px-7 sm:py-4">Book a tour <ArrowUpRight className="ml-2 size-4" /></a></div></Reveal></div></section>
}

export function TrainingVideo() {
  return <section className="relative h-[120dvh] min-h-[120dvh] overflow-hidden border-b border-white/10"><video autoPlay muted loop playsInline preload="none" poster="/forge-training.png" className="absolute inset-0 h-full w-full object-cover opacity-65"><source media="(min-width: 768px)" src="https://videos.pexels.com/video-files/5319755/5319755-hd_1920_1080_25fps.mp4" type="video/mp4" /></video><div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-[#0a0a0b]/35" /><div className="relative mx-auto flex h-full max-w-[1360px] flex-col justify-end px-5 pb-10 lg:px-10"><Reveal><h2 className="font-display text-4xl font-black uppercase sm:text-6xl md:text-8xl">Show up.<br /><span className="text-[#c6ff00]">Move forward.</span></h2></Reveal></div></section>
}

export function Footer() {
  return <footer className="bg-[#0a0a0b] px-4 py-7 sm:px-5 sm:py-8 lg:px-10"><div className="mx-auto flex max-w-[1360px] flex-col gap-4 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between sm:text-xs"><span className="font-mono tracking-[.12em] sm:tracking-[.2em]">SOUL FITNESS / NYC / 2014—2024</span><ScrollLink href="#top">Back to top ↑</ScrollLink></div></footer>
}
