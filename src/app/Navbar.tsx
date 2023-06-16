"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <div className="border-b py-4">
      <div className="container mx-auto flex justify-between">
        <div>LOGO</div>
        <nav className="flex gap-4">
          <Link href="/">Generate</Link>
          <Link href="/collection">Collection</Link>
        </nav>
        <div>Sign In</div>
      </div>
    </div>
  );
}
