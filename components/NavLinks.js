import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
   { name: "Services", href: "/services" },
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
              className={pathname === link.href ? "text-blue font-medium" : "font-medium"}
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
