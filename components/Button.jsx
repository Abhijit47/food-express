import Link from "next/link";

export default function Button({ buttonName = "", children, btnHref = "" }) {
  if (buttonName === "Direction") {
    return (
      <Link href={btnHref ? btnHref : "/#"} className="btn">
        {children}
      </Link>
    );
  }

  if (buttonName === "Go back") {
    return (
      <Link href={btnHref ? btnHref : "/#"} className="btn">
        {children}
      </Link>
    );
  }

  if (buttonName === "Sign in") {
    return (
      <Link href={btnHref ? btnHref : "/#"} className="btn">
        {children}
      </Link>
    );
  }

  if (buttonName === "See More") {
    return (
      <Link href={btnHref ? btnHref : "/#"} className="btn">
        {children}
      </Link>
    );
  }

  if (buttonName === "Upload") {
    return (
      <button type="submit" className="btn flex items-center gap-x-2">
        {children}
      </button>
    );
  }

  if (buttonName === "Update") {
    return (
      <button type="submit" className="btn flex items-center gap-x-2">
        {children}
      </button>
    );
  }

  return (
    <button type="button" className="btn flex items-center gap-x-2">
      {children}
    </button>
  );
}
