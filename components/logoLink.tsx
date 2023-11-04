import Link from 'next/link'
import Image from 'next/image'
import React from 'react'


export default function LogoLink({
    className,
}: {
    className?: string
}) {
    return (
        <Link href="/" className={`cursor-pointer ${className}`}>
            <Image
                priority
                src={"/chicken_bg_white.png"}
                width={96}
                height={96}
                alt="Click here to go to feed"
            />
        </Link>
    )
}
