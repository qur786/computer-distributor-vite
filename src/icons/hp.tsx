import type { IconProps } from "./utils";

export function HPIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="96px"
      height="96px"
      className={className}
    >
      <path fill="#fff" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z" />
      <path
        fill="#1976d2"
        d="M24,43.997c-0.199,0-0.652,0.006-0.85,0l4-10.999h5.625c0.987,0,2.071-0.759,2.409-1.686l4.748-12.687c0.725-1.995-0.417-3.626-2.539-3.626h-7.804l-6.518,18.257h-0.002l-3.712,10.198C10.55,41.361,4,33.445,4,23.999c0-9.174,6.178-16.905,14.6-19.261l-3.83,10.526h-0.001L8.15,32.998h4.239l5.576-14.999h3.185l-5.576,14.999l3.919,0.001l5.438-14.374c0.726-1.995-0.416-3.626-2.536-3.626H19.15l3.951-10.978C23.399,4.008,23.699,4,24,4c11.046,0,20,8.953,20,19.999S35.046,43.997,24,43.997z M36.15,17.999h-3.185l-4.509,11.999h3.185L36.15,17.999z"
      />
    </svg>
  );
}
