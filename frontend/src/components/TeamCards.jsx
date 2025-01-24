import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Github, Linkedin, Twitter } from "lucide-react"

const TeamCards = ({ member }) => {
  return (
    <Card
      className="flex h-[150px] sm:h-[200px] md:h-full md:flex-col overflow-hidden bg-secondary border-none transition-transform hover:scale-105 hover:cursor-pointer"
    >
      <div className="aspect-square w-1/3 md:w-full">
        <img src={member.image || "/vite.svg"} alt={member.name} className="object-cover  " />
      </div>
      <CardContent className="p-3 sm:p-6">
        <h3 className="text-base font-bold">{member.name}</h3>
        <p className="text-xs sm:text-sm mt-1">{member.role}</p>
        <p className="mt-3 text-gray-700 dark:text-gray-400 text-xs sm:text-sm">{member.bio}</p>
        <div className="flex gap-4 sm:mt-6 mt-1">
          {member.social?.github && (
            <a
              href={member.social?.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-400"
            >
              <Github className='sm:w-5 w-4' />
            </a>
          )}
          {member.social?.linkedin && (
            <a
              href={member.social?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-400"
            >
              <Linkedin className="sm:w-5 w-4" />
            </a>
          )}
          {member.social?.twitter && (
            <a
              href={member.social?.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-400"
            >
              <Twitter className="sm:w-5 w-4" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default TeamCards
