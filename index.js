module.exports = {
  options: {
    formatter: 'stylish',
    syntax: 'scss'
  },
  rules: {
    'class-name-format': [
      2,
      // http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/
      {convention: 'hypthenatedbem'}
   ],

    // TODO: Move this to an inline rule ignore in `public/icons/_icons-auto.scss` when the feature is landed
    //   https://github.com/sasstools/sass-lint/pull/402
    //   https://github.com/sasstools/sass-lint/issues/70
    'final-newline': 0,

    // Enforce long form hex notation, e.g. `#FFFFFF` vs `#FFF`
    'hex-length': [
      2,
      {style: 'long'}
    ],

    // Enforce upper case hex notation, e.g. `#FFFFFF` vs `#ffffff`
    'hex-notation': [
      2,
      {style: 'uppercase'}
    ],

    // Enforce leading-zero, e.g. `0.75` vs `.75`
    'leading-zero': [
      2,
      {include: true}
    ],

    // Allow vendor prefixes, e.g. `-webkit-{property}`
    'no-vendor-prefixes': 0,

    // Disable check for placeholders in `@extend`
    //   allow `@extend .cf`, instead of `@extend %cf`
    'placeholder-in-extend': 0
  }
};
