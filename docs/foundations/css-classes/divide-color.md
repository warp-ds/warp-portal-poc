> Borders

# Divide Color
Utilities for controlling the border color between elements.

::: tip s-prefix
The `s-` (semantic) prefix signals that the color value of these will change with the brand css.
:::

## Quick reference

<divide-color-table />

## Basic usage

### Setting the divide color
Control the border color between elements using the `s-divide-{semantic color}` utilities specified in the table above.

<example-container>
  <div class="flex justify-items-stretch rounded-8 divide-x-4 s-divide-primary w-full">
    <div class="p-24 flex-1 text-center ex-font-dark">01</div>
    <div class="p-24 flex-1 text-center ex-font-dark">02</div>
    <div class="p-24 flex-1 text-center ex-font-dark">03</div>
  </div>
</example-container>

```html{1}
<div class="divide-x-4 s-divide-primary">
  <!-- ... -->
</div>
```

### Horizontal and vertical dividers

Avoid conflicts with potential other borders, on the elements you wish to have dividers between,
by adding a direction to the utility class: `s-divide-{x|y}-{semantic color}`.

<example-container>
  <div class="flex justify-items-stretch rounded-8 divide-x-4 s-divide-x-primary w-full">
    <div class="p-24 flex-1 text-center border-b-4 ex-font-dark">01</div>
    <div class="p-24 flex-1 text-center border-b-4 ex-font-dark">02</div>
    <div class="p-24 flex-1 text-center border-b-4 ex-font-dark">03</div>
  </div>
</example-container>

```html
<div class="divide-x-4 s-divide-x-primary">
  <div class="border-b-4">01</div>
  <div class="border-b-4">02</div>
  <div class="border-b-4">03</div>
</div>
```

### Arbitrary values
If you need to use a one-off `divide-{color}` value, use square brackets to generate a property on the fly using any arbitrary value.
However, we recommend only using our semantic color tokens.
This also works with or without an optional, but recommended, direction.
`divide-{x|y}-[{any color value or css var}]`

```html
<div class="divide-y-[--w-s-color-text]"></div>
```

### Opacity
It is possible to control the opacity of the divide color by adding an optional alpha modifier.
The modifier accepts any integer percentage value between 0 and 100.
This works for both semantic and arbitrary classes with any primitive `--w-{color}` or semantic `--w-s-color-{name}` css variable.

::: warning Warning
Please be advised that by using primitive variables you will lose theming possibilities, therefore we highly recommend only using semantic classes and tokens.
:::

<example-container class="bg-center bg-[url(../../images/50s-scientists.jpg)]">
  <div class="flex justify-items-stretch rounded-8 divide-x-8 s-divide-x-primary-subtle/60 w-full mb-24 overflow-hidden">
    <div class="flex-1"><div class="p-24 text-center ex-font-dark s-bg/80 backdrop-blur-m">01</div></div>
    <div class="flex-1"><div class="p-24 text-center ex-font-dark s-bg/80 backdrop-blur-m">02</div></div>
    <div class="flex-1"><div class="p-24 text-center ex-font-dark s-bg/80 backdrop-blur-m">03</div></div>
  </div>
  <div class="rounded-8 divide-y-8 divide-y-[--w-white/60] overflow-hidden">
    <div><div class="px-24 py-8 text-center ex-font-dark s-bg/80 backdrop-blur-m">04</div></div>
    <div><div class="px-24 py-8 text-center ex-font-dark s-bg/80 backdrop-blur-m">05</div></div>
    <div><div class="px-24 py-8 text-center ex-font-dark s-bg/80 backdrop-blur-m">06</div></div>
  </div>
</example-container>

```html
<div class="divide-x-8 s-divide-x-primary-subtle/60 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
<div class="divide-y-8 divide-y-[--w-white/60] ...">
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```
