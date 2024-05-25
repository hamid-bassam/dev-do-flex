'use client'

import { BellRing, Check, Goal } from 'lucide-react';
import { DescriptionScroll } from '../../_components/description-scroll';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Switch } from '../../components/ui/switch';
import { cn } from '../../lib/utils';
const Page = () => {
  const className = '';

  const notifications = [
    {
      title: "Your call has been confirmed.",
      description: "1 hour ago",
    },
    {
      title: "You have a new message!",
      description: "1 hour ago",
    },

  ]

  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  return (
    <main>
      <Card className={cn("px-4 py-2 shadow-md rounded-md", className)}>
        <CardHeader>
          <CardTitle><span className='flex items-center gap-2'><Goal /> realisation d&apos;app web</span> </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <BellRing />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                Push Notifications
              </p>
              <p className="text-sm text-muted-foreground">
                Send notifications to device.
              </p>
            </div>
            <Switch />
          </div>
          <div className=" flex items-center  space-x-4 rounded-md border p-4 ">
            {/* <span className='flex flex-col justify-center items-center gap-2'>
              <p
                ref={contentRef}
                className={`text-xs overflow-hidden transition-max-height duration-500 ease-out `}
                style={{ maxHeight: '200px' }}
              >
                {displayedText}
              </p>
              <Button className='p-1 h-full m-0 rounded-full'
                onClick={() => setFullDescription(!fullDescription)}
              >

                <ArrowDown size={10} />
              </Button>
            </span> */}
            <DescriptionScroll description={description} />
          </div>
          <div>
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Check className="mr-2 h-4 w-4" /> Mark all as read
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};
export default Page;