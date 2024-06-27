import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">ログイン一覧(dev)</h1>
      <div className="space-y-4">
        <Link href="/hitachi/login" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
          日立ログイン
        </Link>
        <Link href="/factory/login" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
          工場ログイン
        </Link>
        <Link href="/transportation/login" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
          運送会社ログイン
        </Link>
        <Link href="/driver/login" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
          ドライバーログイン
        </Link>
      </div>
    </div>
  );
}
