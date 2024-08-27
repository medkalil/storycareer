"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import React from "react";
import { Loader, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import prisma from "@/prisma/client";

interface Props {
  saveId: string;
}

const RemoveSave = ({ saveId }: Props) => {
  const router = useRouter();

  const [isRemoving, setIsRemoving] = React.useState(false);

  const handleRemoveSave = async () => {
    try {
      setIsRemoving(true)
      const res = await axios.delete(`/api/save/${saveId}`);
      if (res.status === 201) {
        router.refresh();
        toast("Save is removed");
      }
    } catch (error) {
      console.log(error)
      toast("Somethinh went wrong", { className: "bg-rose-500 text-white" });
    } finally {
      setIsRemoving(false);
    }
  };

  return (
    <Button
      disabled={isRemoving}
      variant={"destructive"}
      onClick={handleRemoveSave}
    >
      {isRemoving ? <Loader /> : <Trash />}
    </Button>
  );
};

export default RemoveSave;
