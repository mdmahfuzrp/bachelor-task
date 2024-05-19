import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center bg-white justify-center py-10 w-full h-screen mb-[-30px]">
      <img src="/404.png" alt="emailpad" className="max-w-[400px]" />
      <Link href={"/users/dashboard"} className="mt-[50px]">
        <button className="px-6 py-2 bg-special rounded-full text-black font-medium border-[4px] border-slate-200 shadow-lg focus:outline-none ">
          Back to Homepage
        </button>
      </Link>
    </div>
  );
}
