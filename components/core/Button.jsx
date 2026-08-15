import React from "react";
const VARIANTS = {
  primary: "ds-btn ds-btn--primary",
  accent: "ds-btn ds-btn--accent",
  outline: "ds-btn ds-btn--outline",
  urgent: "ds-btn ds-btn--urgent",
};
export function Button({ variant = "primary", small = false, href, className = "", children, ...rest }) {
  const cls = [VARIANTS[variant] || VARIANTS.primary, small && "ds-btn--small", className].filter(Boolean).join(" ");
  return href ? <a className={cls} href={href} {...rest}>{children}</a> : <button type="button" className={cls} {...rest}>{children}</button>;
}
