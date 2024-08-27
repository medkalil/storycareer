import { Separator } from "@/components/ui/separator";
import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs/server";
import React from "react";
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
import ReadStory from "@/components/readStory";
import { Button } from "@/components/ui/button";
import SaveForm from "@/app/(landingpage)/stories/_component/saveForm";
import RemoveSave from "./_component/removeSave";

const SavesPage = async () => {
  const { userId } = auth();

  const saves = await prisma.save.findMany({
    orderBy: {
      createdAT: "desc",
    },
    where: {
      userId: userId!,
    },
    include: {
      story: true,
    },
  });

  return (
    <div className="flex flex-col space-y-5 w-full">
      <h1 className="font-semibold">My saves</h1>
      <Separator />
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5">
        {saves.map(({ story, id }) => (
          <Card key={id}>
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
                <RemoveSave saveId={id} />
            </CardFooter>
          </Card>
        ))}
      </div>
      {saves.length < 1 && (
        <div className="flex items-center justify-center">
            <Image 
              src={"/empty.svg"}
              alt={"empty"}
              width={500}
              height={500}
              // className="h-5 w-5"
            />
        </div>
      )}
    </div>
  );
};

export default SavesPage;
