import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, Send, X } from "lucide-react"
import axios from "axios"

export default function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([]) // Store messages here
    const [input, setInput] = useState("") // Manage input
    const scrollAreaRef = useRef(null)

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleChatSubmit = (e) => {
        e.preventDefault()

        if (input.trim() === "") {
            return
        }

        // Add user's message to the chat
        setMessages((prevMessages) => [...prevMessages, { role: "user", content: input }])

        // Send the user's message to the server
        axios
            .get("http://localhost:8000/api/chat", {
                params: { message: input }, // Sending data as query parameters
            })
            .then((response) => {
                console.log(response.data)

                if (response.data.success === false) {
                    console.error("There was an error fetching the response!")
                    return
                }

                // Add bot's response to the chat
                setMessages((prevMessages) => [...prevMessages, { role: "bot", content: response.data.message }])

                // Clear the input field
                setInput("")
            })
            .catch((error) => {
                console.error("There was an error sending the message!", error)
            })
    }

    useEffect(() => {
        // Scroll to the bottom whenever messages change
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
        }
    }, [scrollAreaRef])

    return (
        <>
            <Button
                className="fixed bottom-4 h-10 w-10 right-4 rounded-full p-4 shadow-lg"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Bot className="h-10 w-10" />
            </Button>
            {isOpen && (
                <Card className="fixed bottom-20 right-4 w-80 h-96 z-10 shadow-lg">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">AI Chatbot</CardTitle>
                        <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                            <X className="h-4 w-4" />
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea className="h-60 w-full pr-4" ref={scrollAreaRef}>
                            {messages.map((m, index) => (
                                <div key={index} className={`mb-4 ${m.role === "user" ? "text-right" : "text-left"}`}>
                                    <span
                                        className={`inline-block p-2 rounded-lg ${m.role === "user" ? "bg-primary text-black" : "bg-text text-background"}`}
                                    >
                                        {m.content}
                                    </span>
                                </div>
                            ))}
                        </ScrollArea>
                    </CardContent>
                    <CardFooter>
                        <form onSubmit={handleChatSubmit} className="flex w-full space-x-2">
                            <Input
                                value={input}
                                onChange={handleInputChange}
                                placeholder="Type your message..."
                                className="flex-grow"
                            />
                            <Button
                                type="submit"
                                variant="primary"
                                className="h-10 w-10 flex justify-center items-center bg-primary !important"
                            >
                                <Send className="h-5 w-5 text-black" />
                            </Button>
                        </form>
                    </CardFooter>
                </Card>
            )}
        </>
    )
}