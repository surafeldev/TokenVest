import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TokenVest</title>
        <meta name="description" content="Decentralized Vesting DApp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-4xl font-bold">Welcome to TokenVest</h1>
        <p className="mt-4">Manage your token vesting schedules efficiently.</p>
        <Link href="/admin">
          <a className="text-blue-500">Go to Admin Dashboard</a>
        </Link>
      </main>
    </div>
  )
}
