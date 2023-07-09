import Image from "next/image"
import { PropsWithChildren } from "react"

export default function IconWrapper({ children }: PropsWithChildren) {
  return (
    <div className=' bg-[#F1F0F0] p-[2px] md:p-2 rounded-sm relative'>
      {children}
    </div>
  )
}
