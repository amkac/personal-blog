import { siteConfig } from '@/config/site';
import { Mail } from 'lucide-react';
import { Icons } from './icons';

export function Footer() {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <a target="_blank" rel="noreferrer" href="mailto:hello@amkac.com">
            <span className="sr-only">Mail</span>
            <Mail className="h-4 w-4" />
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.twitter}>
            <span className="sr-only">Twitter</span>
            {Icons.twitter}
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.github}>
            <span className="sr-only">GitHub</span>
            {Icons.github}
          </a>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
          <a href="/" target="_blank">
            {siteConfig.authorFullName}
          </a>
          © 2024
        </div>
      </div>
    </footer>
  );
}
