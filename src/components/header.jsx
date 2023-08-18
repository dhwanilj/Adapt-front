import { useNavigate } from "react-router-dom";

import { Icons } from "../components/icons";
import { cn } from "../lib/utils";
import { buttonVariants } from "../components/ui/button";

export function DashboardHeader({ heading, text, children, back, className }) {
  const history = useNavigate();

  return (
    <>
      <div
        className={cn(
          "flex items-center justify-between",
          back && "flex-col items-start",
          className
        )}
      >
        {back ? (
          <button
            onClick={() => history(-1)}
            className={cn(buttonVariants({ variant: "ghost" }), "px-1 h-8")}
          >
            <Icons.left className="mr-2 h-4 w-4" /> Back
          </button>
        ) : null}
        <div className="flex flex-col gap-1  justify-center">
          <h1 className="font-heading tracking-tight font-bold text-3xl md:text-4xl">
            {heading}
          </h1>
          {text && <p className="text-md text-muted-foreground">{text}</p>}
        </div>
        {children}
      </div>
    </>
  );
}
