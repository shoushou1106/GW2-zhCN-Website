import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import * as React from "react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          花园战争 2 简体中文 Mod<br/>
          网页测试中
        </h1>
      </div>
      <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          如需下载请看右上角加入QQ群，其他内容仍在测试，别点。
        </p>
      </div>

      <div className="flex gap-4">
        <Link
          href="/download"
          className={buttonVariants()}
        >
          Download
        </Link>
      </div>
    </section>
  )
}



