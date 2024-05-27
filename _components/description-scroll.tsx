'use- client'
import { ArrowDown, ArrowUp } from 'lucide-react';
import {
  useEffect,
  useRef,
  useState
} from 'react';
import { Button } from '../components/ui/button';
export type DescriptionScrollProps = {
  description: string;
};

export const DescriptionScroll = (props: DescriptionScrollProps) => {


  const [fullDescription, setFullDescription] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (contentRef.current) {
      if (fullDescription) {
        (contentRef.current as HTMLDivElement).style.maxHeight = (contentRef.current as HTMLDivElement).scrollHeight + "px";
      }
      else {
        (contentRef.current as HTMLDivElement).style.maxHeight = "50px";
      }
    }
  }
    , [fullDescription]);

  return (
    <span className='flex flex-col justify-center items-center gap-2'>
      <div
        ref={contentRef}
        className={`text-xs overflow-hidden transition-max-height duration-500 ease-out`}
        style={{ maxHeight: '50px' }}
      >
        {/* {props.description.length > 100 && !fullDescription
          ? props.description.substring(0, 100) + "..."
          : props.description} */}
        {props.description}
      </div>
      {props.description.length > 100 &&
        <Button className='p-1 h-full m-0 rounded-full' onClick={async () => {
          setFullDescription(!fullDescription)
        }}>
          {
            !fullDescription ?
              <ArrowDown size={10} /> : <ArrowUp size={10} />
          }

        </Button>
      }
    </span>
  );
};

