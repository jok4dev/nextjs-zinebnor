import { useRouter } from 'next/router';

export default function NavLink({ children, item, handleClose, ...props }) {
  const router = useRouter();
  const { link } = item;

  const handleClick = (e) => {
    e.preventDefault();
    router.push(link);
    if (handleClose) handleClose();
  };

  return (
    <a
      href={link}
      className={
        'flex justify-center text-xl md:text-base font-bold' + router.asPath ===
        link
          ? 'Active'
          : ''
      }
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
