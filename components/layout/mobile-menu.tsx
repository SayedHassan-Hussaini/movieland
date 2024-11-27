import Link from "next/link";
import { ChevronDown, X } from "lucide-react";

export default function MobileMenu({
  mobileMenu,
  setMobileMenu,
  menu,
}: {
  mobileMenu: boolean;
  setMobileMenu: (prop: boolean) => void;
  menu: any[];
}) {
  return (
    <nav
      className={`transition-all duration-100 fixed top-0 w-[100vw] h-[100vh] bg-black/50 block md:hidden ${
        mobileMenu ? "start-0" : "-start-[100vw]"
      }`}
    >
      <div
        className="absolute transition-all duration-200 left-0 top-0 w-full h-full cursor-pointer"
        onClick={() => setMobileMenu(false)}
      ></div>
      <div
        className={`absolute top-0 flex flex-col z-10 w-[80vw] transition-all duration-500 h-full bg-neutral-50 ${
          mobileMenu ? "start-0" : "-start-[80vw]"
        }`}
      >
        <div className="h-20 flex items-center">
          <button className="px-4 py-4" onClick={() => setMobileMenu(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <ul className="flex flex-col h-full">
          {menu.map((item) => (
            <li key={item.id}>
              {item.subLinks ? (
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between px-4 py-3 hover:bg-neutral-200">
                    <span className="text-sm font-medium">{item.name}</span>

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </summary>

                  <ul className="mt-2 space-y-1 px-4">
                    {item.subLinks.map((subItem: any) => (
                      <li key={subItem.id}>
                        {subItem.link && (
                          <Link
                            href={subItem.link}
                            className="block px-4 py-2 text-sm font-medium hover:bg-neutral-200"
                            onClick={() => setMobileMenu(false)}
                          >
                            {subItem.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                item.link && (
                  <Link
                    href={item.link}
                    className="block px-4 py-3 text-sm font-medium hover:bg-neutral-200"
                    onClick={() => setMobileMenu(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </li>
          ))}

          <div dir="ltr" className="bg-red-500 mt-auto bottom-0 w-full">
            <Link
              className="flex gap-2 items-center justify-center bg-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-primary-dark"
              href="/auth/login"
              onClick={() => setMobileMenu(false)}
            >
              Sing in
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
}
