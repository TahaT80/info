import React, { useState, useEffect } from "react";

const Timer = ({time}) => {
  // زمان نهایی برای فردا (این زمان را می‌توان از سرور دریافت کرد)
  const targetDate = new Date(time); // مثال: تاریخ برای فردا

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now; // اختلاف زمان بین الان و تاریخ نهایی

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      // اگر زمان به پایان رسیده باشد
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // پاکسازی تایمر
  }, []);

  return (
    <div className="">
      {(timeLeft.days !== 0 ||
        timeLeft.hours !== 0 ||
        timeLeft.minutes !== 0 ||
        timeLeft.seconds !== 0) && (
        <p className=" text-red-500 font-semibold flex gap-2">
          <div>تا پایان تخفیف :</div>

          <div className="font-mono text-gray-800">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
          </div>
        </p>
      )}
    </div>
  );
};

export default Timer;
