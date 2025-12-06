import Aside from "@/app/componets/aside"
import Image from "next/image"
import UjiCoba from "../componets/ujicoba"
import { title } from "process"
import Link from "next/link"

const items = [
    { title: "tips-belajar", href:"blog/tips-belajar", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, sint in error nemo illum est saepe facere omnis dolorem impedit ab quam totam qui nihil laborum quae! Dolorum, deserunt necessitatibus?" },
    { title: "penggunaan microsoft word",href:"blog/penggunaan-microsoft-word", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, sint in error nemo illum est saepe facere omnis dolorem impedit ab quam totam qui nihil laborum quae! Dolorum, deserunt necessitatibus?" },
    { title: "crypto dan blokchain",href:"blog/crypto-dan-blokchain", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, sint in error nemo illum est saepe facere omnis dolorem impedit ab quam totam qui nihil laborum quae! Dolorum, deserunt necessitatibus?" }
]

export default function pagesBlog() {
    return (
        <section className="grid grid-cols-[3fr_1fr] max-w-6xl mx-auto px-4 py-10 gap-6 min-h-screen">
            <div className="flex flex-col w-full gap-2">
                <header className="flex flex-row gap-2">
                    <p>Terbaru</p>
                    <input placeholder="Search..." />
                </header>
                <div className="flex flex-col gap-2">
                    {items.map((item) => (
                        <Link href={item.href}>
                        <button
                            key={item.title}
                            className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow text-left">
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
                    ))}
                </div>
            </div>
            <Aside />
        </section>
    )
}