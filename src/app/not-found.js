import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center pt-[100px] mb-[-30px]">
      <img src="/404.png" alt="emailpad" className="max-w-[400px]" />
      <Link href={"/"} className="mt-[50px]">
        <button className="px-6 py-2 bg-special rounded-full text-white border-[4px] border-slate-200 shadow-lg focus:outline-none focus:bg-blue-600">
          Back to Homepage
        </button>
      </Link>
    </div>
  );
}
