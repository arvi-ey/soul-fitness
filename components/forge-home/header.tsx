import { Zap } from 'lucide-react'
import { HeaderMenu } from './header-menu'
import { ScrollLink } from './scroll-link'

export function Header({ links }: { links: string[] }) {
  return <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#0a0a0b]/55 backdrop-blur-md"><div className="mx-auto flex max-w-[1360px] items-center justify-between gap-4 px-4 py-4 sm:px-5 sm:py-5 lg:px-10"><ScrollLink href="#top" className="flex min-w-0 items-center gap-2 sm:gap-3" aria-label="Soul Fitness home"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#c6ff00] text-black"><Zap className="size-5 fill-current" /></span><span className="truncate font-mono text-xs font-bold tracking-[0.16em] sm:text-sm sm:tracking-[0.22em]">SOUL FITNESS<span className="text-[#c6ff00]">.</span></span></ScrollLink><nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.18em] text-white/65 lg:flex">{links.map(link => <ScrollLink key={link} className="transition hover:text-[#c6ff00]" href={`#${link}`}>{link}</ScrollLink>)}</nav><HeaderMenu links={links} /></div></header>
}
