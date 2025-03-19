"use client";
import PageHeader from "@/components/dashboard/PageHeader";
import SmallLoader from "@/components/SmallLoader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import axios from "axios";
import { useState } from "react";

export default function AIDoctor() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content: "Hello! I am an AI doctor. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/api/chat`,
        {
          message: input,
        }
      );

      const botMessage = { role: "bot", content: response.data.data };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching response:", error);
      setIsLoading(false);
    }
  };

  return (
    <main className="w-screen md:w-[80vw] px-3 py-5 flex flex-col gap-7">
      <PageHeader pageHeading="AI Doctor" />
      <Card className="flex-1 overflow-hidden">
        <CardContent>
          <ScrollArea className="h-[60vh] p-0 md:p-4 space-y-3 overflow-y-scroll">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user" ? "flex-row-reverse" : ""
                } gap-3 items-start`}
              >
                <img
                  className="w-7 h-7 md:w-10 md:h-10 rounded-full shadow-sm"
                  src={msg.role === "user" ? user?.imageUrl : "/doctor.png"}
                  alt=""
                />
                <div
                  className={cn(
                    "max-w-[400px] w-fit p-2 text-xs md:text-base md:p-3 rounded-md md:rounded-xl",
                    msg.role === "user"
                      ? "bg-blue-500 text-white self-end ml-auto"
                      : "bg-gray-200 text-black self-start mr-auto"
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>

      <div className="flex items-center gap-2 p-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          className="text-sm md:text-base flex-1"
        />
        <Button
          disabled={isLoading}
          onClick={handleSend}
          className="bg-blue-500"
        >
          {isLoading ? <SmallLoader /> : "Send"}
        </Button>
      </div>
    </main>
  );
}
