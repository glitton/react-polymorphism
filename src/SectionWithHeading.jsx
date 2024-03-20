function SectionWithHeading({ title, level, children }) {
  if (typeof level !== "number" || level < 1 || level > 6) {
    throw new Error(
      `Unrecognized heading level: h${level}.  Valid levels are 1, 2, 3, 4, 5, or 6`
    );
  }

  const HeadingTag = `h${level}`;
  return (
    <section>
      <HeadingTag>{title}</HeadingTag>
      {children}
    </section>
  );
}

export default SectionWithHeading;
