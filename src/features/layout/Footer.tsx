import clsx from "clsx";
import { Goal, Home, PenSquare, User } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../../../components/ui/button";

export const Footer = () => {

  return (


    <div className="py-2 flex justify-between container gap-1 fxed bottom-0 left-0 right-0 bg-background w-full m-auto border-t border-accent">
      <Link href='/'
        className={clsx(
          buttonVariants({
            variant: 'ghost',
          }),
          "flex-1",
        )}
      >
        <Home size={16} />
      </Link>
      <Link href='/'
        className={clsx(
          buttonVariants({
            variant: 'ghost',
          }),
          "flex-1",
        )}
      >
        <Goal size={16} />
      </Link>
      <Link href='/'
        className={clsx(
          buttonVariants({
            variant: 'ghost',
          }),
          "flex-1",
        )}
      >
        <PenSquare size={16} />
      </Link>
      <Link href='/'
        className={clsx(
          buttonVariants({
            variant: 'ghost',
          }),
          "flex-1",
        )}
      >
        <User size={16} />
      </Link>


    </div>
  );
};