import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function DesktopMenu({ menu }: { menu: any }) {
  return (
    <nav aria-label="Global" className="hidden md:block">
      <ul className="flex items-center lg:gap-8 gap-6 text-sm lg:text-base">
        {menu.map((item:any) => (
          <li key={item.id}>
            {item.subLinks ? (
              <div className="relative group text-neutral-900 flex cursor-pointer items-center gap-1 py-2">
                {item.name}
                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <ChevronDown className="h-4 w-4" />
                </span>

                <ul className="absolute top-[100%] bg-white text-neutral-900 p-3 shadow-sm rounded-xl start-0 border-[1px] border-neutral-100 min-w-48 group-hover:block hidden">
                  {item.subLinks.map((subLink:any) => (
                    <li key={subLink.id}>
                      {subLink.link && (
                        <Link
                          href={subLink.link}
                          className="block py-2 hover:bg-neutral-100 rounded-lg p-2 px-3 transition-all duration-200 whitespace-nowrap"
                        >
                          {subLink.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              item.link && (
                <Link
                  className="text-neutral-900 py-2 hover:text-primary transition-all duration-200"
                  href={item.link}
                >
                  {item.name}
                </Link>
              )
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
