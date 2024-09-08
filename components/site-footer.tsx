import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          由&nbsp;
          <a
            href={siteConfig.links.bilibili}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            shoushou1106
          </a>
          &nbsp;用❤制作
        </p>
      </div>
    </footer>
  )
}
