"use client"

import Aside from "@/app/components/aside"
import items from "@/app/data/data.json"
import Link from "next/link"
import Image from "next/image"
import imgSearch from "@/public/icons8-search.svg"
import { useState } from "react"

export default function PagesBlog() {
    const [search, setSearch] = useState("")

    const filtered = items.filter(item =>
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <section className="grid grid-cols-[3fr_1fr] max-w-6xl mx-auto px-4 py-10 gap-6 min-h-screen">
            <div className="flex flex-col w-full gap-2">
                <header className="flex flex-row rounded border gap-2">
                    <Image src={imgSearch} alt="search" width={16} height={16} />
                    <input
                        className="w-full"
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search..."
                    />
                </header>

                <div className="flex flex-col gap-2">
                    {filtered.map((item) => (
                        <div key={item.title}>
                            <Link href={item.href}>
                                <button className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow text-left">
                                    <div className="relative h-28 bg-slate-50">
                                        <div className="absolute inset-3 rounded-lg border border-dashed border-slate-200" />
                                        <div className="absolute top-4 left-4 h-2 w-16 rounded-full bg-purple-500" />
                                    </div>
                                    <div className="px-4 py-3">
                                        <p className="font-medium text-slate-900 group-hover:text-purple-600">
                                            {item.title}
                                        </p>
                                        <p className="text-sm text-slate-500">
                                            {item.description} components
                                        </p>
                                    </div>
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Aside />
        </section>
    )
}
