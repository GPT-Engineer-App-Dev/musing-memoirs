import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content };
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    localStorage.setItem("posts", JSON.stringify([...existingPosts, newPost]));
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center py-10">
      <header className="mb-10">
        <h1 className="text-4xl font-bold">Add New Post</h1>
      </header>
      <main className="w-full max-w-4xl space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>New Blog Post</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium">
                  Title
                </label>
                <Input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 block w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="content" className="block text-sm font-medium">
                  Content
                </label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="mt-1 block w-full"
                  rows="10"
                  required
                />
              </div>
              <Button type="submit" className="w-full">Add Post</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AddPost;