'use client'

import { PlusCircle } from "lucide-react";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<'button'> {}

export function Button ({ ...props }: ButtonProps) {
  return (
    <button 
      className="p-4 flex gap-x-2 bg-blue-dark rounded-lg text-gray-100 font-bold text-sm items-center justify-center hover:bg-blue transition-colors cursor-pointer" 
      {...props}
    >
      Criar
      <PlusCircle className="size-4" />
    </button>
  )
}