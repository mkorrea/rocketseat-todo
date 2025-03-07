import { Trash2 } from "lucide-react";

interface DeleteButtonProps {
  handleDeleteTask: () => void
}

export function DeleteButton ({ handleDeleteTask }: DeleteButtonProps) {
  return (
    <div className="min-w-6 min-h-6 h-fit ml-auto hover:bg-gray-400 rounded-sm flex justify-center items-center text-gray-300 hover:text-danger cursor-pointer transition-all" onClick={handleDeleteTask}>
      <Trash2 className="size-4" />
    </div>
  )
}