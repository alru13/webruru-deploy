import { MagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="grid-cols-1 container mx-auto items-center py-6 overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <h1 className="font-semibold text-4xl p-4">
          Beranda 
        </h1>
        <p className="px-8 mt-2 line-clamp-3 text-sm/relaxed">
          Website ini menyediakan sebuah sarana dalam kita menyelesaikan 
          masalah-masalah yang kemungkinan terjadi di mesin diesel kalian. 
          Data yang ada berupa data SDS (Symptoms, Damages, Solutions) atau 
          gejala, kerusakan, dan solusi.
          Data-data yang disediakan didapat dari sumber yang terpercaya dan 
          dapat terus diperbaharui oleh admin dengan meng-input data maupun 
          menghapus data dari database.
        </p>
      </div>
      <div className="flex items-center justify-center h-80">
        <Link href={`/search`} className="rounded-lg p-4 text-white hover:text-color-header bg-color-gray -top-2/4">Mulai Mencari Kerusakan Mesin
          
        </Link>
      </div>
    </>
  );
}
