import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="z-10 flex w-full max-w-5xl flex-col items-center justify-between space-y-2 p-2 text-sm sm:w-3/4 lg:flex">
        <div className="w-full rounded-2xl border-2 border-b-4 border-r-4 border-black bg-white p-4 shadow-xl">
          <div className="flex flex-row space-x-2 ">
            <Image
              alt="image of wdc"
              src="/wdc.jpg"
              className="w-10 rounded-full"
              height={48}
              width={48}
            />
            <p className="cursor-pointer truncate font-semibold hover:underline">
              WebDevCody
            </p>
            <p className="cursor-pointer text-gray-500">@webdevcody</p>
            <p className="cursor-pointer truncate text-gray-500 hover:underline">
              Sep 7
            </p>
          </div>

          <div className="-mt-4 ml-10 break-words px-2">
            For those joking about quitting software to become farmers… you do
            know you&apos;ll just spend all your time fighting bugs off your
            crops right? It&apos;s basically the same profession
          </div>
        </div>

        {/* Owen */}
        <div className="mx-8 w-full rounded-2xl border-2 border-b-4 border-r-4 border-black bg-white p-4 shadow-xl">
          <div className="flex flex-row space-x-2 ">
            <Image
              alt="image of Owen"
              src="/me.PNG"
              className="w-10 rounded-full"
              height={48}
              width={48}
            />
            <p className="cursor-pointer truncate font-semibold hover:underline">
              Owen Allen
            </p>
            <p className="cursor-pointer text-gray-500">@owenallen</p>
            <p className="cursor-pointer truncate text-gray-500 hover:underline">
              Nov 3
            </p>
          </div>
          <div className="-mt-4 ml-10 break-words px-2">Hello!</div>
        </div>

        {/* */}
        <div className="w-full rounded-2xl border-2 border-b-4 border-r-4 border-black bg-white p-4 shadow-xl">
          <div className="flex flex-row space-x-2 ">
            <Image
              alt="image of prime"
              src="/primeagen.jpg"
              className="w-10 rounded-full"
              height={48}
              width={48}
            />
            <p className="cursor-pointer truncate font-semibold hover:underline">
              ThePrimeagen
            </p>
            <p className="cursor-pointer text-gray-500">@ThePrimeagen</p>
            <p className="cursor-pointer truncate text-gray-500 hover:underline">
              Nov 3
            </p>
          </div>
          <div className="-mt-4 ml-10 break-words px-2">
            i want to love rust
            <br />
            i want to love rust
            <br />
            i want to love rust
            <br />
            i want to love rust
            <br />
            i want to love rust
            <br />
            i want to love rust
            <br />
            i want to love rust
            <br />
            i want to love rust
            <br />
            i want to love rust
            <br />
            i want to love rust
            <br />
            i want to love rust
            <br />
            i want to love rust
            <br />
            i want to love rust
            <br />i think i love go
          </div>
        </div>

        <div className="w-full rounded-2xl border-2 border-b-4 border-r-4 border-black bg-white p-4 shadow-xl">
          <div className="flex flex-row space-x-2 ">
            <Image
              alt="image of theo"
              src="/theo.jpg"
              className="w-10 rounded-full"
              height={48}
              width={48}
            />
            <p className="cursor-pointer truncate font-semibold hover:underline">
              Theo - t3.gg
            </p>
            <p className="cursor-pointer text-gray-500">@t3dotgg</p>
            <p className="cursor-pointer truncate text-gray-500 hover:underline">
              Nov 3
            </p>
          </div>
          <div className="-mt-4 ml-10 break-words px-2">
            Dev stuff I’m thankful I left behind: <br />
            - container orchestration <br />
            - DB migrations <br />
            - self-rolling auth <br />
            - fully native mobile apps <br />
            - Docker <br />
            - git rebase <br />
            - code coverage <br />
            - working on Linux <br />
            - Python <br />
          </div>
        </div>

        <div className="w-full rounded-2xl border-2 border-b-4 border-r-4 border-black bg-white p-4 shadow-xl">
          <div className="flex flex-row space-x-2 ">
            <Image
              alt="image of prime"
              src="/primeagen.jpg"
              className="w-10 rounded-full"
              height={48}
              width={48}
            />
            <p className="cursor-pointer truncate font-semibold hover:underline">
              ThePrimeagen
            </p>
            <p className="cursor-pointer text-gray-500">@ThePrimeagen</p>
            <p className="cursor-pointer truncate text-gray-500 hover:underline">
              Nov 3
            </p>
          </div>
          <div className="-mt-4 ml-10 break-words px-2">
            the act of purchasing a software book and not reading it is one of
            the most celebrated software engineering past times
          </div>
        </div>

        <div className="w-full rounded-2xl border-2 border-b-4 border-r-4 border-black bg-white p-4 shadow-xl">
          <div className="flex flex-row space-x-2 ">
            <Image
              alt="image of wdc"
              src="/wdc.jpg"
              className="w-10 rounded-full"
              height={48}
              width={48}
            />
            <p className="cursor-pointer truncate font-semibold hover:underline">
              WebDevCody
            </p>
            <p className="cursor-pointer text-gray-500">@webdevcody</p>
            <p className="cursor-pointer truncate text-gray-500 hover:underline">
              Sep 7
            </p>
          </div>
          <div className="-mt-4 ml-10 break-words px-2">
            if you don&apos;t use typescript, you&apos;ll either console logs
            objects to remember their structure, or you&apos;ll open up other
            functions and inspect the code to know how the arguments must be
            shaped. I did it for years on a 400k line of code 100% javascript
            project, and it kind of sucked
          </div>
        </div>

        <div className="w-full rounded-2xl border-2 border-b-4 border-r-4 border-black bg-white p-4 shadow-xl">
          <div className="flex flex-row space-x-2 ">
            <Image
              alt="image of theo"
              src="/theo.jpg"
              className="w-10 rounded-full"
              height={48}
              width={48}
            />
            <p className="cursor-pointer truncate font-semibold hover:underline">
              Theo - t3.gg
            </p>
            <p className="cursor-pointer text-gray-500">@t3dotgg</p>
            <p className="cursor-pointer truncate text-gray-500 hover:underline">
              Nov 3
            </p>
          </div>
          <div className="-mt-4 ml-10 break-words px-2">
            I hate the “It&apos;s just a job” discourse. I genuinely love
            programming. It&apos;s sad that we mock people for enjoying their
            work.
          </div>
        </div>

        <div className="w-full rounded-2xl border-2 border-b-4 border-r-4 border-black bg-white p-4 shadow-xl">
          <div className="flex flex-row space-x-2">
            <Image
              alt="image of linus"
              src="/linus.jpeg"
              className="w-10 rounded-full"
              height={48}
              width={48}
            />
            <p className="cursor-pointer truncate font-semibold hover:underline">
              Linus Torvalds
            </p>
            <p className="cursor-pointer text-gray-500">@Linus__Torvalds</p>
            <p className="cursor-pointer truncate text-gray-500 hover:underline">
              Aug 26, 2014
            </p>
          </div>
          <div className="-mt-4 ml-10 break-words px-2">
            HAPPY ANNIVERSARY, LINUX!
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </main>
  );
}
