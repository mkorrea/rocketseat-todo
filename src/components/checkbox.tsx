import { Check } from "lucide-react";

interface CheckboxProps {
  checked?: boolean
}

export function Checkbox ({ checked }: CheckboxProps) {
  return (
    <div 
      data-checked={checked}
      className='border-2 min-w-5 min-h-5 w-fit h-fit rounded-full border-blue group-hover:bg-blue-dark flex justify-center items-center data-[checked=true]:bg-purple-dark data-[checked=true]:border-none data-[checked=true]:group-hover:bg-purple transition-all '
    >
      <Check className={`size-3 text-gray-100 ${!checked && 'hidden'}`} />
    </div>
  )
}