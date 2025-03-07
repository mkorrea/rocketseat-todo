'use client'

import { useState } from "react";
import { Checkbox } from "./checkbox";
import { DeleteButton } from "./delete-button";

interface TaskProps {
  task: string
  handleToggleTask: () => void
  handleDeleteTask: () => void
  isTaskChecked: boolean
}

export function Task ({ task, handleToggleTask, isTaskChecked, handleDeleteTask }: TaskProps ) {
  
  return (
    <div className="bg-gray-500 w-full px-4 rounded-lg flex items-center gap-x-3 cursor-pointer" >
      <div className="group flex gap-x-3 w-full h-full py-4 " onClick={handleToggleTask}>
        <Checkbox checked={isTaskChecked} />

        <p className={`text-sm ${isTaskChecked ? 'line-through text-gray-300' : 'text-gray-100'}`}>{ task }</p>
      </div>

      <DeleteButton handleDeleteTask={handleDeleteTask} />
    </div>
  )
}