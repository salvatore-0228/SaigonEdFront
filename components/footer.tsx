"use client"

import React from 'react';
import Link from 'next/link';


interface PageControllerProps {
  pageNumber: number,
  pageMax: number,
  type: string
}

const PageControls = ({ pageNumber, pageMax, type }: PageControllerProps) => {
  if (type === "pages") return (
    <div className={`flex flex-row gap-2 items-center text-center justify-center h-full`}>
      <div style={{ cursor: "pointer", width: "4dvh", height: "4dvh" }} >
        <Link href={`/${type}/${pageNumber - 5 <= 0 ? 1 : pageNumber - 5}`}>
          <img src="/images/btn/-10.png" />
        </Link>
      </div>
      <div style={{ cursor: "pointer", width: "4dvh", height: "4dvh" }} >
        <Link href={`/${type}/${pageNumber - 2 <= 0 ? 1 : pageNumber - 2}`}>
          <img src="/images/btn/-5.png" />
        </Link>
      </div>
      <div style={{ cursor: "pointer", width: "4dvh", height: "4dvh" }} >
        <Link href={`/${type}/${pageNumber - 1 <= 0 ? 1 : pageNumber - 1}`}>
          <img src="/images/btn/previous.png" />
        </Link>
      </div>
      <div style={{ cursor: "pointer", width: "4dvh", height: "4dvh" }} >
        <Link href={`/${type}/${pageNumber + 1 <= pageMax - 1 ? pageNumber + 1 : pageMax}`}>
          <img src="/images/btn/next.png" />
        </Link>
      </div>
      <div style={{ cursor: "pointer", width: "4dvh", height: "4dvh" }} >
        <Link href={`/${type}/${pageNumber + 2 <= pageMax - 1 ? pageNumber + 2 : pageMax}`}>
          <img src="/images/btn/+5.png" />
        </Link>
      </div>

      <div style={{ cursor: "pointer", width: "4dvh" }}>
        <Link href={`/${type}/${pageNumber + 5 <= pageMax - 1 ? pageNumber + 5 : pageMax}`}>
          <img src="/images/btn/+10.png" />
        </Link>
      </div>
    </div>
  );
  else return (
    <div className={`flex flex-row gap-2 items-center text-center justify-center h-full`}>
      <div style={{ cursor: "pointer", width: "4dvh", height: "4dvh" }} >
        <Link href={`/pages/${72 + Math.ceil((pageNumber) / 8 - 1)}`}>
          <img src="/images/btn/home2_btn.png" />
        </Link>
      </div>
    </div>
  )
};


interface FooterProps {
  pageNumber: number,
  maxNumber: number,
  type: string,
}

export default function Footer({ pageNumber, maxNumber, type }: FooterProps) {
  console.log(maxNumber)
  return (
    <div style={{ position: "relative", width: "100%", backgroundColor: "black", height: "5dvh" }} >
      <PageControls
        pageNumber={pageNumber}
        pageMax={maxNumber}
        type={type}
      />
    </div>
  )
}
