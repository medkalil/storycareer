import { Story } from "@prisma/client";
import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";

interface Props {
  initialeData: Story;
  children: React.ReactNode;
}

const ReadStory = ({ initialeData, children }: Props) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger> {children} </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{initialeData.title}</AlertDialogTitle>
          <AlertDialogDescription>
            {initialeData.story}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel> <X className="h-5 w-5 mr-2"/> Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ReadStory;
