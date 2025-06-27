import { HTMLAttributes } from "react";

type TitleProps = HTMLAttributes<HTMLHeadingElement>;

export default function Title({ children }: TitleProps) {
  return (
    <h1 className="flex gap-2 text-[1.7rem] font-[600] items-center text-purple-900">
      {children}
    </h1>
  );
}
