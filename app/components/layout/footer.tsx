import Image from "next/image";
import Link from "next/link";

const accountLinks = [
  { label: "Track my order", href: "/my-order" },
  { label: "Terms of use", href: "/terms" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Submit your feedback", href: "/feedback" },
];

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/", icon: "/icon1.png" },
  { name: "Twitter", href: "https://twitter.com/", icon: "/icon2.png" },
  { name: "Facebook", href: "https://www.facebook.com/", icon: "/icon3.png" },
  { name: "Pinterest", href: "https://www.pinterest.com/", icon: "/icon4.png" },
];

export default function Footer() {
  return (
    <footer className="relative isolate w-full overflow-hidden">
      <Image
        src="/cover.png"
        alt="footer background"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 py-10 sm:grid-cols-2 lg:grid-cols-3  lg:px-8">
        <div className="flex flex-col items-start gap-4">
          <Image
            src="/logo.png"
            alt="Rainbow Rattles"
            width={140}
            height={60}
            className="h-auto w-36"
          />
          <p className="max-w-xs text-sm leading-6">
            Nunc consequat interdum varius sit amet mattis.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start gap-3">
          <h3 className="mb-1 font-bold">My account</h3>

          {accountLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm transition-colors hover:text-sky-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-start gap-3">
          <h3 className="mb-1 font-bold">Customer service</h3>

          <p className="text-sm">Monday to Friday</p>
          <p className="text-sm">10am - 6pm (New York time)</p>

          <p className="text-sm">
            Call us:
            <a href="tel:1234567868" className="text-sky-600">
              123-456-7868
            </a>
          </p>

          <p className="text-sm">
            Email us:
            <a href="mailto:info@example.com" className="text-sky-600">
              info@example.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
