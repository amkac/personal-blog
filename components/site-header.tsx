import React from 'react';
import { Icons } from './icons';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import MainNav from './main-nav';
import MobileNav from './mobile-nav';
import ModeToggle from './mode-toggle';

const SiteHeader = () => {
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="sm:flex items-center hidden">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'w-10 px-0'
                )}
              >
                {Icons.github}
              </div>
            </Link>

            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'w-10 px-0'
                )}
              >
                {Icons.twitter}
              </div>
            </Link>
          </nav>
          <ModeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
