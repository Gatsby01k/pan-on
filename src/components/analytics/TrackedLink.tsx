'use client';

import Link from 'next/link';
import { MouseEventHandler, PropsWithChildren } from 'react';
import { trackEvent } from '@/lib/analytics';

type TrackedLinkProps = PropsWithChildren<{
  href: string;
  className?: string;
  eventName?: string;
  eventLabel?: string;
  eventLocation?: string;
  external?: boolean;
  target?: string;
  rel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}>;

export function TrackedLink({
  href,
  children,
  className,
  eventName = 'cta_click',
  eventLabel,
  eventLocation,
  external = false,
  target,
  rel,
  onClick,
}: TrackedLinkProps) {
  const payload = {
    label: eventLabel,
    location: eventLocation,
    href,
  };

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    trackEvent(eventName, payload);
    onClick?.(event);
  };

  if (external) {
    return (
      <a href={href} className={className} target={target} rel={rel} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
