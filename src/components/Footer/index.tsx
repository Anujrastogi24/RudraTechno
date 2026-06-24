import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "RudraWeb Analyzer", href: "/products" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Sign in", href: "/signin" },
      { label: "Start a project", href: "/signup" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Terms of Service", href: "/" },
      { label: "Privacy Policy", href: "/" },
      { label: "Refund Policy", href: "/" },
    ],
  },
];

const socials = [
  {
    label: "Facebook",
    href: "/",
    path: "M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z",
  },
  {
    label: "X",
    href: "/",
    path: "M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z",
  },
  {
    label: "LinkedIn",
    href: "/",
    path: "M15.2196 2H1.99991C1.37516 2 0.875366 2.49749 0.875366 3.11936V16.3029C0.875366 16.8999 1.37516 17.4222 1.99991 17.4222H15.1696C15.7943 17.4222 16.2941 16.9247 16.2941 16.3029V3.09448C16.3441 2.49749 15.8443 2 15.2196 2ZM5.44852 15.1089H3.17444V7.7709H5.44852V15.1089ZM4.29899 6.75104C3.54929 6.75104 2.97452 6.15405 2.97452 5.43269C2.97452 4.71133 3.57428 4.11434 4.29899 4.11434C5.02369 4.11434 5.62345 4.71133 5.62345 5.43269C5.62345 6.15405 5.07367 6.75104 4.29899 6.75104ZM14.07 15.1089H11.796V11.5518C11.796 10.7061 11.771 9.58674 10.5964 9.58674C9.39693 9.58674 9.222 10.532 9.222 11.4772V15.1089H6.94792V7.7709H9.17202V8.79076H9.19701C9.52188 8.19377 10.2466 7.59678 11.3711 7.59678C13.6952 7.59678 14.12 9.08925 14.12 11.129V15.1089H14.07Z",
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-white/10 dark:bg-gray-dark">
      <div className="container py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-5">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo/Rudra_Techno-logo.png"
                alt="Rudra Techno"
                className="h-10 w-auto"
                width={300}
                height={200}
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-body-color dark:text-body-color-dark">
              We design and build custom websites and software for growing
              businesses — track it in real time and ship with confidence.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-body-color transition-colors hover:border-primary hover:text-primary dark:border-white/10 dark:text-body-color-dark dark:hover:border-primary dark:hover:text-primary"
                >
                  <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                    <path d={s.path} fill="currentColor" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h3 className="mb-4 text-sm font-semibold text-black dark:text-white">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-body-color transition-colors hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row dark:border-white/10">
          <p className="text-sm text-body-color dark:text-body-color-dark">
            © 2026 Rudra Techno. All rights reserved.
          </p>
          <p className="text-sm text-body-color dark:text-body-color-dark">
            Built by Anuj Rastogi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
