'use client'

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Task } from "@/components/task";

import Image from "next/image";
import { v4 as uuidv4 } from 'uuid'
import { useState } from "react";

interface taskProps {
  id: string
  title: string
  isCompleted: boolean
}

export default function Home() {
  const [ task, setTask ] = useState<taskProps[]>([])
  
  function addTask(newTask: FormData) {
    const newTaskValue = Object.fromEntries(newTask.entries())
    const addedTask = newTaskValue.task

    setTask(prevTasks => [
      {
        id: uuidv4(),
        title: addedTask as string,
        isCompleted: false
      },
      ...prevTasks
    ])
  }

  function handleToggleTask(taskId: string) {
    setTask(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId ? {...task, isCompleted: !task.isCompleted} : task
      )
    )
  }
  
  function handleDeleteTask(taskId: string) {
    setTask(prevTasks => 
      prevTasks.filter(task => task.id !== taskId )
    )
  }

  const uncompletedTasks = task.filter(({isCompleted}) => (
    isCompleted === false
  ))  
  const completedTasks = task.filter(({isCompleted}) => (
    isCompleted === true
  ))

  return (
    <main className="flex flex-col items-center ">
      <div className="bg-gray-700 h-[200px] w-full  -z-10 flex justify-center items-center">
        <div className="flex items-center gap-x-3 h-12">
          <Image src='/rocket.png' width={22} height={36} alt="" />
          <h1 className="text-blue text-[40px] font-black ">to<span className="text-purple-dark">do</span></h1>
        </div>
      </div>

      <div className="max-w-[738px] w-full z-10 -mt-7 flex flex-col gap-y-16 px-6 md:px-0">
        <form action={addTask} className="flex gap-x-2">
          <Input name="task"/> 
          <Button type="submit" />
        </form>

        <div className="flex flex-col gap-y-6">
          <div className="flex justify-between max-h-fit text-sm">
            <p className="text-blue font-bold flex gap-x-2 leading-none items-center">
              Tarefas criadas <span className="text-gray-200 bg-gray-400 rounded-full px-2 py-0.5 text-xs"> {task.length} </span>
            </p>

            <p className="text-purple font-bold flex gap-x-2 leading-none items-center">
              Concluídas <span className="text-gray-200 bg-gray-400 rounded-full px-2 py-0.5 text-xs"> {completedTasks.length} de {task.length} </span>
            </p>
          </div>

          {task.length ? (
            <div className="flex flex-col gap-y-3">
              {uncompletedTasks.map(item => {
                return (
                  <Task
                    key={item.id}
                    task={item.title}
                    handleToggleTask={() => handleToggleTask(item.id)}
                    isTaskChecked={item.isCompleted}
                    handleDeleteTask={() => handleDeleteTask(item.id)}
                  />
                )
              })}
              {completedTasks.length !== 0 && 
                <div className="h-px bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600" />
              }
              {completedTasks.map(item => {
                return (
                  <Task
                    key={item.id}
                    task={item.title}
                    handleToggleTask={() => handleToggleTask(item.id)}
                    isTaskChecked={item.isCompleted}
                    handleDeleteTask={() => handleDeleteTask(item.id)}
                  />
                )
              })}
            </div>
          ) : (
          <div className="h-6 rounded-lg bg-gray-400">
            <div className="py-16 px-6 rounded-lg bg-gray-600 mt-px flex flex-col justify-center items-center gap-y-6 text-gray-300">
              <Image src='/clipboard.png' width={56} height={56} alt="" />
              <p className="flex flex-col items-center">
                <span className="font-bold">Você ainda não tem tarefas cadastradas</span>
                Crie tarefas e organize seus itens a fazer
                
              </p>
            </div>
          </div>
          )}
        </div>
      </div>
    </main>
  );
}
