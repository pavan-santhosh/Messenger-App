import {db} from '@/lib/db'

export default async function Home() {
  await db.set('hello','') // it sets the key and value
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-3xl font-bold text-red-500 underline">
          Hello world!
        </h1>
      </div>
    </main>
  );
}