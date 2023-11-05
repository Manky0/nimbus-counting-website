import Link from "next/link";

const NavLink = ({ href, title }) => {
  if (title == 'Contato')
  return (
    <Link
        href={href}
        className="px-6 py-3 sm:w-fit rounded-full bg-gradient-to-br from-[#b3dde9] to-[#4896ac] hover:bg-slate-200 text-white"
        >
          {title}
        </Link>
    )
else
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#f6f7f2] sm:text-x0.95 lg:text-x2 rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;

