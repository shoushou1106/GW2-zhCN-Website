"use client"

import * as React from "react"
import Image from "next/image"
import Link, { LinkProps } from "next/link"
import { usePathname, useRouter } from "next/navigation"

import { NavItem } from "@/types/nav"
import { zhcnSiteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MobileNav({ items }: MainNavProps) {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="md:hidden px-0 mr-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
          >
            <path
              d="M3 5H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <Image
            src="/zhcn/favicon.png.webp"
            alt="logo"
            width={3000}
            height={3000}
            className="mr-2 w-6 h-6"
          />
          <span className="font-bold">{zhcnSiteConfig.name}</span>
        </MobileLink>
        <ScrollArea className="pb-10 pl-6 my-4 h-[calc(100vh-8rem)]">
          {items?.length ? (
            <nav className="flex flex-col space-y-3">
              {items?.map(
                (item, index) =>
                  item.href && (
                    <MobileLink
                      key={index}
                      href={item.href}
                      onOpenChange={setOpen}
                      className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname === item.href
                          ? "text-foreground"
                          : "text-foreground/60"
                      )}
                    >
                      {item.title}
                    </MobileLink>
                  )
              )}
            </nav>
          ) : null}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
