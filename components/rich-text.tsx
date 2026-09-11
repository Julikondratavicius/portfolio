import { Fragment } from "react";
import { isTodo, SHOW_TODOS } from "@/lib/content";

/**
 * Renderiza texto con **negritas** y marca visualmente el contenido
 * pendiente (strings que arrancan con "TODO:").
 */
export function RichText({ text }: { text: string }) {
  if (isTodo(text)) {
    if (!SHOW_TODOS) return null;
    return <span className="todo-mark">{text}</span>;
  }

  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold text-ink">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
