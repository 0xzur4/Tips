"use client"
import Image from "next/image"
import file from "@/public/next.svg"
import Link from "next/link"

export default function Aside() {
    return (
        <aside className="flex flex-col gap-[20px]">
            <h2>Recommendations</h2>
            <ul className="flex flex-col gap-[10px]">
                <li>
                    <Link href="/blog/tips-belajar">
                        <div className="">
                            <Image src={file} alt="image" />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit repudiandae...</p>
                            </div>
                    </Link>
                </li>
                <li>
                    <Link href="/blog/penggunaan-microsoft-word">
                        <div className="">
                            <Image src={file} alt="image" />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda est eveniet quisquam error! A aperiam...</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}