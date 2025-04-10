"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  imageUrl: string;
};

/*
    Image - priority : 
        預先載入這張圖片（在 <head> 裡加入 <link rel="preload">）
        不等待懶載入（lazy loading）
        幫助這張圖片盡早出現在畫面上
*/

export default function CarImage({ imageUrl }: Props) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      src={imageUrl}
      alt="image of car"
      fill
      className={`object-cover group-hover:opacity-75 duration-700 ease-in-out ${
        isLoading
          ? "grayscale blur-2xl scale-110"
          : "grayscale-0 blur-0 scale-100"
      }`}
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      onLoad={() => setLoading(false)}
    />
  );
}
