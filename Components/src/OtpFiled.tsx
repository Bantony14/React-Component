import { useEffect, useRef, useState, type ChangeEvent } from "react";

function OtpFiled() {
  const [otp, setOtp] = useState<string[]>(Array<string>(4).fill(""));
  const divRef = useRef<HTMLDivElement>(null);

  function Otp(index: number, value: string): void {
    setOtp((prev) => {
      const newOtp = [...prev];
      newOtp[index] = value;
      return newOtp;
    });

    if (value === "") {
      if (index > 0) {
        const input = divRef.current?.children[index - 1] as HTMLInputElement;

        input?.focus();
      }
    } else {
      if (index < otp.length - 1) {
        const input = divRef.current?.children[index + 1] as HTMLInputElement;

        input?.focus();
      }
    }
  }

  return (
    <div ref={divRef} className="flex gap-4">
      {otp.map((value, index) => {
        return (
          <input
            autoFocus={index === 0 ? true : false}
            key={index}
            value={value}
            maxLength={1}
            className="w-10 h-10 bg-amber-300 rounded-xl  focus:bg-amber-950 focus:text-amber-50 text-center"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              Otp(index, e.target.value)
            }
          />
        );
      })}
    </div>
  );
}

export default OtpFiled;
