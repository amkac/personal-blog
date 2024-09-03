'use client';
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Icons } from './icons';

function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden">
          <Menu className="w-5 h-5" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <Link
          onClick={() => {
            setOpen(false);
          }}
          href="/"
          className="flex items-center"
        >
          {Icons.logo}
          <span className="text-sm font-bold ml-2">{siteConfig.name}</span>
        </Link>
        <div className="flex flex-col gap-3 mt-3">
          <Link
            className="text-xs font-sm"
            onClick={() => {
              setOpen(false);
            }}
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="text-xs font-sm"
            href="/about"
            onClick={() => {
              setOpen(false);
            }}
          >
            About
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            className="text-xs font-sm"
            href={siteConfig.links.github}
          >
            GitHub
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            className="text-xs font-sm"
            href={siteConfig.links.twitter}
          >
            Twitter
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
