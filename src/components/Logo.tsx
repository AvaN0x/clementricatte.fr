"use client";

import * as React from "react";

import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="https://avatars3.githubusercontent.com/u/27494805"
      alt="AvaN0x's logo"
      width={460}
      height={460}
      className={className}
    />
  );
}
