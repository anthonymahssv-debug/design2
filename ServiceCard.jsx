import React from "react";
export function ServiceCard({ title, children, href = "#" }) {
  return (
    <article className="ds-card">
      <h3 className="ds-h3">{title}</h3>
      <p>{children}</p>
      <p style={{ marginTop: "1rem" }}><a href={href}>Conoce más →</a></p>
    </article>
  );
}
