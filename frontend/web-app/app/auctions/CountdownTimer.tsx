"use client";

import React from "react";
import Countdown, { zeroPad } from "react-countdown";

type Props = {
  auctionEnd: string;
};

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}) => {
  return (
    <div
      className={`border-2 border-white text-white py-1 px-2 rounded-lg flex justify-center ${
        completed
          ? "bg-red-600"
          : days == 0 && hours < 10
          ? "bg-amber-600"
          : "bg-green-600"
      }`}
    >
      {completed ? (
        <span>Auction finished</span>
      ) : (
        // suppressHydrationWarning : Server 渲染出來的內容 不等於Client hydration 的內容  React 會跳出這樣的警告： Warning: Text content did not match. Server: "0:0:0" Client: "0:0:1"
        // 這時就可以用 suppressHydrationWarning={true}
        <span suppressHydrationWarning={true}>
          {days}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      )}
    </div>
  );
};

export default function CountdownTimer({ auctionEnd }: Props) {
  return (
    <div>
      <Countdown date={auctionEnd} renderer={renderer} />
    </div>
  );
}
