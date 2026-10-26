import type { ReactNode } from "react";

export default function Container({children}: {children: ReactNode}) {
  return (
    <div className=' p-6 rounded-2xl w-[80%] mx-auto my-5'>{children}</div>
  )
}
