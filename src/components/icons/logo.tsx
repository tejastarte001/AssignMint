export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.5 13.82l-2.7-2.7-2.7 2.7c-.55.55-1.45.55-2 0l-1.82-1.82c-.55-.55-.55-1.45 0-2l2.7-2.7-2.7-2.7c-.55-.55-.55-1.45 0-2l1.82-1.82c.55-.55 1.45-.55 2 0l2.7 2.7 2.7-2.7c.55-.55 1.45-.55 2 0l1.82 1.82c.55.55.55 1.45 0 2l-2.7 2.7 2.7 2.7c.55.55.55 1.45 0 2l-1.82 1.82c-.55.55-1.45.55-2 0z" />
      <path d="M10.41 12l2.12-2.12c.2-.2.51-.2.71 0l.71.71c.2.2.2.51 0 .71L12.83 12l1.12 1.12c.2.2.2.51 0 .71l-.71.71c-.2.2-.51.2-.71 0L10.41 12z" fill="currentColor"/>
    </svg>
  );
}
