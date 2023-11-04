import Link from 'next/link'
import React from 'react'

export default function CluckButton() {
    return (
        <Link
            href={"?cluckModal=true"}
            className="button hover:none ml-auto h-10 w-24 cursor-pointer select-none rounded-full
                    border-2  border-black
                    bg-white
                    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
                    active:translate-y-2  active:border-b-0 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
                "
        >
            <span className="flex h-full flex-col items-center justify-center font-mono text-lg text-black ">
                Cluck
            </span>
        </Link>)
}
