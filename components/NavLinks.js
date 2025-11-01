import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.name}>
            <Link
              className={pathname === link.href ? "font-bold text-[#4ff0b7]" : "font-bold"}
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </>
  );
}
