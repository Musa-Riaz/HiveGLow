import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Github, Linkedin, Twitter } from "lucide-react"

const TeamCards = ({ member }) => {
  return (
    <Card
      className="overflow-hidden bg-secondary border-none transition-transform hover:scale-105"
    >
      <div className="aspect-square">
        <img src={member.image || "/vite.svg"} alt={member.name} className="object-cover  " />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold">{member.name}</h3>
        <p className="text-sm mt-1">{member.role}</p>
        <p className="mt-4 text-gray-700 dark:text-gray-400 text-sm">{member.bio}</p>
        <div className="flex gap-4 mt-6">
          {member.social?.github && (
            <a
              href={member.social?.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-400"
            >
              <Github />
            </a>
          )}
          {member.social?.linkedin && (
            <a
              href={member.social?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-400"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {member.social?.twitter && (
            <a
              href={member.social?.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-400"
            >
              <Twitter className="h-5 w-5" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default TeamCards
