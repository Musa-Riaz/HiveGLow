import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Github, Linkedin, Twitter } from "lucide-react"

const TeamCards = ({member}) => {
  return (
    <Card
              className="overflow-hidden bg-white dark:bg-gray-800 transition-transform hover:scale-105"
            >
              <div className="aspect-square"> 
                <img src={member.image || "/vite.svg"} alt={member.name}  className="object-cover " />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold dark:text-white">{member.name}</h3>
                <p className="text-sm text-primary mt-1 dark:text-primary-foreground">{member.role}</p>
                <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm">{member.bio}</p>
                <div className="flex gap-4 mt-6">
                  {member.social?.github && (
                    <a
                      href={member.social?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500  hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                    >
                      <Github />
                    </a>
                  )}
                  {member.social?.linkedin && (
                    <a
                      href={member.social?.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.social?.twitter && (
                    <a
                      href={member.social?.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
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
