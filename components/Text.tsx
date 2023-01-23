export const Text = ({ text }) => {
  if (!text) {
    return null
  }
  return text.map((value: { annotation: any; text: string }, index: number) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value
    const className = [
      bold ? "font-bold" : "",
      code ? "font-monospaced" : "",
      italic ? "font-italic" : "",
      strikethrough ? "line-through" : "",
      underline ? "underline" : "",
      color === "default" ? "text-gray-900" : `text-[${color}]`,
    ].join(" ")
    return (
      <>
        {index > 0 && <br />}
        <span key={index} className={className}>
          {text.link ? (
            <a href={text.link.url}>{text.content}</a>
          ) : (
            text.content
          )}
        </span>
      </>
    )
  })
}
