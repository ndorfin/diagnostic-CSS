# Diagnostic CSS

A collection of CSS declarations that can help highlight common mistakes in HTML

## Warnings

```css

:not(button)[role="button"] {
  --warning: 'The role attribute here could be removed if you used the correct element';
  --suggestion: 'Replace this element with a `<button>`. Then you can remove the `role` attribute.'
}

```

## Errors

```css

:is(ul, ol) > :not(li) {
  --type: 'validation';
  --error: 'The only valid child element for a list is a list-item (`<ul>`)';
  --suggestion: 'Move these child elements into `<li>`';
}

:is(h1, h2, h3, h4, h5, h6, p) :is(ul, ol, dl) {
  --type: 'validation';
  --error: 'Lists can’t be nested within text-level block elements';
  --suggestion: 'Make these lists siblings of their headings or paragraphs';
}

```
