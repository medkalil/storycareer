import { Button } from "@/components/ui/button";
import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs/server";
import { link } from "fs";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import TitleForm from "./_component/titleForm";
import StoryForm from "./_component/storyForm";
import ImageForm from "./_component/imageForm";
import DeleteStory from "./_component/deleteStory";

const EditStoryPage = async ({ params }: { params: { storyId: string } }) => {
  const { userId } = auth();

  if (!userId) return null;

  const story = await prisma.story.findUnique({
    where: { id: params.storyId, userId: userId! },
  });

  if (!story) redirect("/story");

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="flex flex-col space-y-3">
        <div>
            <h1 className="text-2xl font-semibold">
                Edit Your Story
            </h1>
            <p className="text-sm text-muted-foreground">
                update your title, story and image
            </p>
            <TitleForm initialData={story} />
            <StoryForm initialData={story} />
            <ImageForm initialData={story} />
            <div className="flex items-center justify-between gap-5">
              <Link href={"/story"}>
                  <Button variant={"link"}>
                      Back To My Stories
                  </Button>
              </Link>
              <DeleteStory initialData={story} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default EditStoryPage;
