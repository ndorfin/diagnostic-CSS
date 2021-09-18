# Diagnostic CSS

A collection of CSS declarations that can help highlight common mistakes in HTML.

Here's [a working prototype on CodePen](https://codepen.io/ndorfin/pen/PojQygg?editors=1100).

## Warnings

```css
:not(button)[role="button"] {
  --type: 'unnecessary-role';
  --level: 'warning';
  --hint: 'The role attribute here could be removed if you used the correct element';
  --suggestion: 'Replace this element with a `<button>`. Then you can remove the `role` attribute.'
}
```

## Errors

```css
:is(ul, ol) > :not(li) {
  --type: 'validation';
  --level: 'error';
  --hint: 'The only valid child element for a list is a list-item (`<ul>`)';
  --suggestion: 'Move these child elements into `<li>`';
}

:is(h1, h2, h3, h4, h5, h6, p) :is(ul, ol, dl) {
  --type: 'validation';
  --level: 'error';
  --hint: 'Lists can’t be nested within text-level block elements';
  --suggestion: 'Make these lists siblings of their headings or paragraphs';
}

body > :not(:is(
  h1, h2, h3, h4, h5, h6, p,
  ul, ol, dl,
  div,
  header, footer, article, aside, section, main, nav,
  table,
  figure, picture, video, audio, img, canvas
)) {
  --type: 'validation';
  --level: 'error';
  --hint: 'Child elements of the `<body>` must be block-level elements';
  --suggestion: 'Wrap this inline element in a block-level element';
}
```
