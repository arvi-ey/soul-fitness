'use client'

import type { AnchorHTMLAttributes } from 'react'

export function ScrollLink({ onClick, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...props} onClick={event => {
    onClick?.(event)
    if (!event.defaultPrevented && props.href?.startsWith('#')) {
      window.setTimeout(() => window.history.replaceState(null, '', window.location.pathname + window.location.search), 0)
    }
  }} />
}
