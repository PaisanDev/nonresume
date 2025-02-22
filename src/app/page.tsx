import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <nav className="flex flex-row justify-between w-full py-4 px-6">
          <div className="uppercase font-bold">non.resume</div>
          <div className="flex">
            <Button variant={"default"}>Sign in</Button>
          </div>
        </nav>
        <main className="flex justify-center ">
          <div className="text-center flex flex-col gap-7 py-28">
            <h1 className="text-5xl uppercase font-semibold">
              All in one resume
            </h1>
            <div>
              <h2>Feeling bored when preparing job application documents?</h2>
              <h3>Me too, so I create Nonresume.</h3>
            </div>
            <div className="flex flex-col  gap-2">
              <div className="flex gap-4 justify-center">
                <Button>Create for free</Button>
                <Button variant={"outline"}>Learn more</Button>
              </div>
              <p className="text-sm text-gray-400">No credit card require.</p>
            </div>
          </div>
        </main>
      </div>
      <footer className="flex justify-between text-gray-500 pb-5 px-6">
        <p>© 2025 Sandev Team. All rights reserved.</p>
      </footer>
    </div>
  );
}
