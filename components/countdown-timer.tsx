"use client";
import { useState, useEffect } from "react";

interface TimeUnitProps {
  value: number;
  unit: string;
}
export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 14);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = launchDate.getTime() - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, unit }: TimeUnitProps) => (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 min-w-20">
      <span className="text-2xl md:text-3xl font-bold text-teal-600">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-sm text-gray-600 font-medium mt-1">{unit}</span>
    </div>
  );
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <TimeUnit value={timeLeft.days} unit="days" />
      <TimeUnit value={timeLeft.hours} unit="hours" />
      <TimeUnit value={timeLeft.minutes} unit="minutes" />
      <TimeUnit value={timeLeft.seconds} unit="seconds" />
    </div>
  );
}
