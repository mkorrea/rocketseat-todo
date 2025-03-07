import { ComponentProps } from "react";

interface InputProps extends ComponentProps<'input'> {}

export function Input ({ ...props }: InputProps) {
  return (
    <input 
      type="text" 
      className="bg-gray-500 p-4 w-full rounded-lg font-normal text-base outline-none placeholder:text-gray-300 text-gray-100 border border-gray-700 focus:border-purple-dark "
      placeholder="Adicione uma nova tarefa"
      {...props}
    />
  )
}