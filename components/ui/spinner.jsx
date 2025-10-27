import { Loader2Icon, LoaderIcon } from "lucide-react";
import { cn } from "@/lib/utils";

function Spinner({ className, ...props }) {
  return (
    <div className="flex justify-center items-center h-80 w-full">
      <LoaderIcon
        role="status"
        aria-label="Loading"
        className={cn("size-16 animate-spin text-blue-500", className)}
        {...props}
      />
    </div>
  );
}

export { Spinner };
