# Bluprint

**Bluprint** is a customizable minimalistic responsive CSS grid packed with multiple useful helper classes and generators.

- Responsive CSS grid (as in Bootstrap or Foundation).
- Easily customizable grid, tiers and class names.
- Lightweight (<1KB gzipped).
- Helper classes for responsive visibility, paddings, resets.
- Generators to create stylish buttons.

## Installation

### Step 1

#### Option A

Install Bluprint via NPM or Yarn:

`npm i bluprint.css`

`yarn add bluprint.css`

#### Option B

You can also manually [download](https://github.com/kefir500/bluprint/zipball/master) and unzip the package:

### Step 2

Finally, include the CSS in your page <head> section.

```html
<link rel="stylesheet" href="dist/normalize.min.css">
<link rel="stylesheet" href="dist/bluprint.min.css">
```

[Normalize.css](https://necolas.github.io/normalize.css/) is not mandatory but highly recommended: this library is used to reduce cross-browser rendering inconsistency.

### CDN
Alternatively, you can include the CSS via CDN without downloading or installing any local files:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
<link rel="stylesheet" href="https://gitcdn.link/repo/kefir500/bluprint/master/dist/bluprint.min.css">
```

## Grid

#### Rows

The conception of grid is pretty straightforward: it consists of containers called rows (`.row`).
Rows, in turn, are wrappers for [columns](#fixed-columns) (`.col`).

#### Tiers

Tiers are based on screen size ranges and used for [responsive column](#responsive-columns) stacking.

The default grid layout consists of 12 columns. Your block can take any amount of these columns from 1 to 12 accordingly. For responsive layouts different number of columns can be taken for the specific screen size:

- `.xs-*` takes `*` columns on any screen.
- `.sm-*` takes `*` columns on screens *≥768px* wide.
- `.md-*` takes `*` columns on screens *≥992px* wide.
- `.lg-*` takes `*` columns on screens *≥1200px* wide.
- `*` is a number of columns to occupy from *1* to *12*.
The screen size classes are applied (and being overridden) from smaller to bigger ones.

These tiers as well as the grid layout can be easily [customized](#customization) according to your needs.

#### Fixed Columns

The following blocks take the fixed amount of columns on different screen sizes.

```html
<div class="row">
    <div class="col xs-12"></div>
    <div class="col xs-6"></div>
    <div class="col xs-6"></div>
    <div class="col xs-4"></div>
    <div class="col xs-4"></div>
    <div class="col xs-4"></div>
</div>
```

[Demo](https://qwertycube.com/bluprint/#fixed-columns)

#### Responsive Columns

The following example demonstrates the responsive layout where each block takes the specified number of columns on different screens:

- 12 columns (of 12) on `xs` (extra small) screens.
- 6 columns (of 12) on `sm` (small) screens.
- 4 columns (of 12) on `md` (medium) screens (except for the first column).
- 3 columns (of 12) on `lg` (large) screens.

Columns stack depending on the current screen size.

```html
<div class="row">
    <div class="col xs-12 sm-6 md-12 lg-3"></div>
    <div class="col xs-12 sm-6 md-4 lg-3"></div>
    <div class="col xs-12 sm-6 md-4 lg-3"></div>
    <div class="col xs-12 sm-6 md-4 lg-3"></div>
</div>
```

[Demo](https://qwertycube.com/bluprint/#responsive-columns)

#### Nested Columns

Columns can be nested in multiple levels. Wrap each level in a .row class in order to zero out the inner padding.

```html
<div class="row">
    <div class="col xs-12 sm-6">
        <div class="row">
            <div class="col xs-12"></div>
            <div class="col xs-6"></div>
            <div class="col xs-6"></div>
        </div>
    </div>
    <div class="col xs-12 sm-6">
        <div class="row">
            <div class="col xs-4"></div>
            <div class="col xs-4"></div>
            <div class="col xs-4"></div>
            <div class="col xs-3"></div>
            <div class="col xs-3"></div>
            <div class="col xs-3"></div>
            <div class="col xs-3"></div>
        </div>
    </div>
</div>
```

[Demo](https://qwertycube.com/bluprint/#nested-columns)

### Customization

In order to customize the grid tiers / columns number, size / generate button classes, run `npm install` in the root directory to install the required dependencies. Then you can simply edit the `scss/_config.scss` file and build your CSS file with `gulp build` command. For better understanding of the following variables read the [Tiers](#tiers) section.

#### Variables

Variable                   | Description                                | Default
---------------------------|--------------------------------------------|----------------
`$grid-columns`            | Number of columns in a layout row.         | `12`
`$grid-gutter`             | Half-width of a gap between columns.       | `8px`
`$class-row`               | Base class name for a row container.       | `row`
`$class-column-base`       | Base class name for columns.               | `col`
`$class-column-responsive` | Class name pattern for responsive columns. | `[TIER]-[SIZE]`

- `[TIER]` is replaced with a screen size tier.
- `[SIZE]` is replaced with a column size.

#### Tiers

The `$tiers` map contains tiers which respresent the screen size breakpoints for stacking responsive columns. The corresponding classes are generated based on this variable.

```sass
$tiers: (
  xs: 0,
  sm: 768,
  md: 992,
  lg: 1200
);
```

Tier | Screen Size
-----|------------
`xs` | ≥ 0
`sm` | ≥ 768
`md` | ≥ 992
`lg` | ≥ 1200

You can create any number of screen size tiers with your own names and breakpoints according to your needs, for example:

```sass
$tiers: (
  mobile: 0,
  tablet: 700,
  laptop: 1200,
  desktop: 1600
);
```

#### Buttons

You can also generate stylish flat buttons with automatically calculated hover and click effects.

##### SCSS
```sass
$buttons: (
  primary: #1a98ff,
  success: #76bd42,
  danger: #e65e57
);
```

##### HTML
```html
<a class="btn btn--primary">Primary</a>
<a class="btn btn--success">Success</a>
<a class="btn btn--danger">Danger</a>
```

[Demo](https://qwertycube.com/bluprint/#buttons)

If you don't need any buttons, simply remove this variable.
