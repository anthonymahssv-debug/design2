import React from "react";
export function Badge({ tone = "default", children, className = "" }) {
  const extra = tone === "default" ? "" : `ds-badge--${tone}`;
  return <span className={["ds-badge", extra, className].filter(Boolean).join(" ")}>{children}</span>;
}
