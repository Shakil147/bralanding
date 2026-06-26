import Image from "next/image";
import { HIND } from "./data";

export default function HomeHero({ name, logo }: { name?: string; logo?: string }) {
  return (
    <header style={{ background: "var(--accent, #f85606)" }} className="text-center px-4 py-10 sm:px-5 sm:py-14">
      {logo && (
        <Image
          src={logo}
          alt={name ?? "logo"}
          width={200}
          height={64}
          preload
          sizes="200px"
          className="mx-auto mb-4 h-14 sm:h-16 w-auto object-contain"
        />
      )}
      <h1
        style={{ fontFamily: HIND, fontWeight: 800, color: "#fff", margin: 0, textShadow: "0 2px 6px rgba(0,0,0,.12)" }}
        className="text-3xl sm:text-4xl md:text-5xl"
      >
        {name || "আমাদের দোকান"}
      </h1>
      <p style={{ fontFamily: HIND, fontWeight: 500, color: "#fff", margin: "12px 0 0" }} className="text-base sm:text-lg">
        মানসম্মত পণ্য, সহজে অর্ডার, ক্যাশ অন ডেলিভারি সুবিধা
      </p>
    </header>
  );
}
