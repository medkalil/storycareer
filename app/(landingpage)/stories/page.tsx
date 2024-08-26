import React from "react";
import prisma from "@/prisma/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ArrowRight, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReadStory from "@/components/readStory";

const StoriesPage = async () => {
  const stories = await prisma.story.findMany({
    orderBy: {
      createdAT: "desc",
    },
  });

  return (
    <div className="py-32 h-full">
      <div className="flex flex-col space-x-3">
        <h1 className="text-3xl max-w-2xl md:text-5xl font-bold">
          Explore Career stories
        </h1>
        <p className="text-muted-foreground max-w-lg">
          welcome to the heart of StoeyCarrer, where real stories from
          professionals across varios fields come alive. Dive into these
          narratives to find inspiration, learn from others experiences, and see
          the diverse paths peaple have taken in their careers.
        </p>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 mt-10 gap-5">
        {stories.map((story) => (
          <Card key={story.id}>
            {story.image ? (
              <div className="w-full h-52 aspect-video relative rounded-md">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="w-4 h-4"
                />
              </div>
            ) : (
              <div className="h52 w-full flex items-center justify-center aspect-video bg-secondary relative rounded-md">
                <ImageIcon className="w-8 h-8" />
              </div>
            )}
            <CardHeader>
              <CardTitle className="line-clamp-2"> {story.title} </CardTitle>
              <CardDescription className="line-clamp-3">
                {story.story}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex items-center justify-between">
              <ReadStory initialeData={story}>
                <Button>
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </ReadStory>
              saveForm
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StoriesPage;
