'use client'

import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { ScrollLink } from './scroll-link'

export function HeaderMenu({ links }: { links: string[] }) {
  const [open, setOpen] = useState(false)
  return <div className="flex shrink-0 items-center gap-3 sm:gap-5"><ScrollLink href="#membership" className="hidden rounded-full bg-[#c6ff00] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black transition hover:bg-white sm:block">Start training <ArrowUpRight className="ml-2 inline size-3" /></ScrollLink><button onClick={() => setOpen(!open)} className="grid size-10 shrink-0 place-items-center rounded-full border border-white/15 lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>{open && <nav className="absolute inset-x-0 top-full flex flex-col gap-5 border-t border-white/10 bg-[#0a0a0b] px-5 py-6 text-sm uppercase tracking-[0.18em] lg:hidden">{links.map(link => <ScrollLink key={link} href={`#${link}`} onClick={() => setOpen(false)}>{link}</ScrollLink>)}</nav>}</div>
}
