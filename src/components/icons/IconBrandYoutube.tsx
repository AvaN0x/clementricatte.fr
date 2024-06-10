import { cn } from "@/lib/utils";

// https://www.youtube.com/howyoutubeworks/resources/brand-resources/
export const IconBrandYoutube = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      version="1.1"
      width="1em"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 192 192"
      xmlSpace="preserve"
      className={cn("", props.className)}
      {...props}
    >
      <g>
        <path
          fill="#ff0000"
          d="M180.32,53.36c-2.02-7.62-7.99-13.62-15.56-15.66C151.04,34,96,34,96,34s-55.04,0-68.76,3.7
     c-7.57,2.04-13.54,8.04-15.56,15.66C8,67.18,8,96,8,96s0,28.82,3.68,42.64c2.02,7.62,7.99,13.62,15.56,15.66
     C40.96,158,96,158,96,158s55.04,0,68.76-3.7c7.57-2.04,13.54-8.04,15.56-15.66C184,124.82,184,96,184,96S184,67.18,180.32,53.36z"
        />
        <polygon fill="#ffffff" points="78,122.17 124,96 78,69.83 	" />
      </g>
    </svg>
  );
};

export default IconBrandYoutube;
