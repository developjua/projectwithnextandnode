import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Link href="/users/income-bmw-mercedes" legacyBehavior>
        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3">
          Users with income &lt;$5 USD and BMW/Mercedes car
        </a>
      </Link>
      <Link href="/users/male-phone-price-10000" legacyBehavior>
        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3">
          Male Users with phone price &gt;$10,000
        </a>
      </Link>
      <Link href="/users/lastname-quote-email" legacyBehavior>
        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3">
          Users with last name starting with "M" and quote &gt;15 chars in email
        </a>
      </Link>
      <Link href="/users/car-brand-email-digit" legacyBehavior>
        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3">
          Users with BMW/Mercedes/Audi car and no digit in email
        </a>
      </Link>
      <Link href="/users/top-10cities" legacyBehavior>
        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3">
          Top 10 cities with highest number of users and average income
        </a>
      </Link>
    </div>
  );
}
