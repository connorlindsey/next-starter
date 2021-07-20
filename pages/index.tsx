import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Starter</title>
        <meta name="description" content="Nextjs starter by Connor Lindsey" />
      </Head>

      <main className="p-8 flex flex-col items-center">
        <h1 className="text-primary-600 text-3xl mb-3">Next Starter</h1>
        <Link href="/">
          <a className="btn">Test Nprogress</a>
        </Link>
      </main>
    </div>
  )
}
