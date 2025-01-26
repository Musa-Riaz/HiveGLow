import { useState } from "react"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, Send, X } from "lucide-react"
import axios from "axios"

export default function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const { messages, input, handleInputChange, handleSubmit } = useChat()

    const handleChatSubmit = (e) => {
        e.preventDefault()

        if (input.trim() === "") {
            return
        }

        handleSubmit(input)
        // handleSubmit("Hello", "bot")
        // axios.post("http://localhost:5000/chat", { message: input })
        //     .then((res) => {
        //         handleSubmit(res.data.message, "bot")
        //     })
        //     .catch((err) => {
        //         console.error(err)
        //     })

    }

    return (
        <>
            <Button className="fixed bottom-4 h-10 w-10 right-4 rounded-full p-4 shadow-lg" onClick={() => setIsOpen(!isOpen)}>
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
                        <ScrollArea className="h-60 w-full pr-4">
                            {messages.map((m) => (
                                <div key={m.id} className={`mb-4 ${m.role === "user" ? "text-right" : "text-left"}`}>
                                    <span
                                        className={`inline-block p-2 rounded-lg ${m.role === "user" ? "bg-primary text-black" : "bg-muted"}`}
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