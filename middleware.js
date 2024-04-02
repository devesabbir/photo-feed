import { NextResponse } from "next/server";

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let locales = ["bn", "en"];
let defaultLocale = "en";

const getLocale = (request) => {
  const acceptLanguage = request.headers.get("accept-language") ?? undefined;
  let headers = { "accept-language": acceptLanguage };
  let languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
};

export function middleware(request) {
  const pathName = request.nextUrl.pathname;

  const pathNameMissingLocale = locales.every(
    (locale) =>
      !pathName.startsWith(`/${locale}`) && !pathName.startsWith(`/${locale}/`)
  );

  if (pathName.startsWith(`/api`) || pathName.startsWith(`/api/`)) {
    return NextResponse.next();
  }
  if (pathNameMissingLocale) {
    // Redirect if there is no locale
    const locale = getLocale(request);
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathName}`, request.url)
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
