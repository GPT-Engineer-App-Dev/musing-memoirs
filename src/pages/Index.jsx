import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <header className="mb-10">
        <h1 className="text-4xl font-bold">My Personal Blog</h1>
        <p className="text-lg text-gray-600">Sharing my thoughts and experiences</p>
      </header>
      <main className="w-full max-w-4xl space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Welcome to My Blog</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              This is the first post on my new blog. Stay tuned for more updates!
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <Input id="name" type="text" className="mt-1 block w-full" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input id="email" type="email" className="mt-1 block w-full" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea id="message" className="mt-1 block w-full" rows="4" />
              </div>
              <Button type="submit" className="w-full">Send</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;