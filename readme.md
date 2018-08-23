# Wallace

Analyze your CSS from the CLI, like [Parker](https://www.npmjs.com/package/parker) or [Stylestats](https://www.npmjs.com/package/stylestats)

## Usage

```sh
Usage
  $ wallace https://projectwallace.com

  Options
  --format, -f Format pretty (default) or JSON
  --compact, -c Show a compact output

  Examples
  $ wallace https://projectwallace.com
  $ wallace 'body { color: red; }'
  $ echo 'html { font-size: 16px; } | wallace
  $ wallace 'html {}' --format=json
  $ cat style.css | wallace --compact
```

## Output

This example shows the output for [projectwallace.com](https://www.projectwallace.com):

```sh
┌───────────────────────────────────────────────────────────────────┐
│ Stylesheet                                                        │
├─────────────────────────┬────────────┬────────────────────────────┤
│ Stylesheet size         │ 29.9 kB    │                            │
├─────────────────────────┼────────────┤                            │
│ Simplicity              │ 0.874      │                            │
├─────────────────────────┼────────────┤                            │
│ Cohesion                │ 3.022      │                            │
├─────────────────────────┼────────────┤                            │
│ Rules                   │ 366        │                            │
├─────────────────────────┼────────────┼────────────┬───────────────┤
│ At-Rules                │      Total │     Unique │    Unique (%) │
├─────────────────────────┼────────────┼────────────┼───────────────┤
│ @media queries          │         61 │         11 │       18.033% │
├─────────────────────────┼────────────┼────────────┼───────────────┤
│ @font-faces             │          1 │          1 │          100% │
├─────────────────────────┼────────────┼────────────┼───────────────┤
│ @keyframes              │          0 │          0 │            0% │
├─────────────────────────┼────────────┴────────────┴───────────────┤
│ @media queries          │  1 × (max-width:33em)                   │
│                         │  1 × (max-width:44em)                   │
│                         │  1 × (min-height:33em)                  │
│                         │  5 × (min-height:44em)                  │
│                         │ 13 × (min-width:33em)                   │
│                         │  2 × (min-width:40em)                   │
│                         │ 11 × (min-width:44em)                   │
│                         │ 15 × (min-width:60em)                   │
│                         │  5 × (min-width:66em)                   │
│                         │  3 × (min-width:800px)                  │
│                         │  4 × (min-width:80ch)                   │
├─────────────────────────┼────────────┬────────────┬───────────────┤
│ Selectors               │      Total │     Unique │    Unique (%) │
├─────────────────────────┼────────────┼────────────┼───────────────┤
│ All                     │        419 │        326 │       77.804% │
├─────────────────────────┼────────────┼────────────┼───────────────┤
│ ID                      │          0 │          0 │            0% │
├─────────────────────────┼────────────┼────────────┼───────────────┤
│ JS                      │          0 │          0 │            0% │
├─────────────────────────┼────────────┼────────────┼───────────────┤
│ Universal               │          3 │          3 │          100% │
├─────────────────────────┼────────────┼────────────┼───────────────┤
│ Accessibility           │          0 │          0 │            0% │
├─────────────────────────┼────────────┼────────────┴───────────────┤
│ Average identifiers     │      1.356 │                            │
├─────────────────────────┼────────────┴────────────────────────────┤
│ Max. identifiers        │ 1. .stats .stat:not(:first-child) .s…   │
│                         │ 2. .form p a                            │
│                         │ 3. .selectors > li:hover                │
│                         │ 4. [data-ua*="Safari/"]:not([data-ua…   │
│                         │ 5. .site-nav .logo::after               │
├─────────────────────────┼─────────────────────────────────────────┤
│ Top specificity         │ 1. .stats .stat:not(:first-child) .s…   │
│                         │ 2. .legal-nav__link:not(.legal-nav__…   │
│                         │ 3. .site-nav .logo:hover                │
│                         │ 4. .btn-group .btn:not(:last-child)     │
│                         │ 5. [data-ua*="Safari/"]:not([data-ua…   │
├─────────────────────────┼─────────────────────────────────────────┤
│ ID Selectors            │ N\A                                     │
├─────────────────────────┼─────────────────────────────────────────┤
│ JS Selectors            │ N\A                                     │
├─────────────────────────┼─────────────────────────────────────────┤
│ Universal Selectors     │ 1 × *                                   │
│                         │ 1 × *::after                            │
│                         │ 1 × *::before                           │
├─────────────────────────┼─────────────────────────────────────────┤
│ Accessibility Selectors │ N\A                                     │
├─────────────────────────┼────────────┬────────────┬───────────────┤
│ Declarations            │      Total │     Unique │     Share (%) │
├─────────────────────────┼────────────┼────────────┼───────────────┤
│ All                     │       1106 │        512 │       46.293% │
├─────────────────────────┼────────────┼────────────┼───────────────┤
│ !importants             │          0 │            │            0% │
├─────────────────────────┼────────────┼────────────┼───────────────┤
│ Properties              │      Total │     Unique │    Unique (%) │
├─────────────────────────┼────────────┼────────────┼───────────────┤
│ All                     │       1106 │        112 │       10.127% │
├─────────────────────────┼────────────┼────────────┼───────────────┤
│ Prefixed                │         10 │          7 │       70.000% │
├─────────────────────────┼────────────┴────────────┴───────────────┤
│ Prefixed                │ 1 × -moz-osx-font-smoothing             │
│                         │ 2 × -moz-user-select                    │
│                         │ 1 × -ms-text-size-adjust                │
│                         │ 2 × -webkit-appearance                  │
│                         │ 1 × -webkit-font-smoothing              │
│                         │ 1 × -webkit-text-size-adjust            │
│                         │ 2 × -webkit-user-select                 │
├─────────────────────────┼────────────┬────────────┬───────────────┤
│ Values                  │      Total │     Unique │    Unique (%) │
├─────────────────────────┼────────────┼────────────┼───────────────┤
│ Prefixed                │          0 │          0 │            0% │
├─────────────────────────┼────────────┼────────────┼───────────────┤
│ Colors                  │        195 │         28 │       14.359% │
├─────────────────────────┼────────────┼────────────┼───────────────┤
│ Font-families           │         20 │          3 │       15.000% │
├─────────────────────────┼────────────┼────────────┼───────────────┤
│ Font-sizes              │         63 │         21 │       33.333% │
├─────────────────────────┼────────────┴────────────┴───────────────┤
│ Unique Colors           │  6 × #da2b2b                            │
│                         │  1 × #d53b30                            │
│                         │  3 × #ffba1a                            │
│                         │  2 × #ff0                               │
│                         │  1 × #2f3825                            │
│                         │  3 × #61df0c                            │
│                         │  1 × #1f3527                            │
│                         │ 11 × #29c87d                            │
│                         │  7 × #24ad6d                            │
│                         │  3 × #22423d                            │
│                         │ 12 × #080e10                            │
│                         │  9 × #728c97                            │
│                         │  9 × #2b393f                            │
│                         │ 25 × #9eacb3                            │
│                         │ 31 × #cdd3d6                            │
│                         │  1 × rgba(24,35,42,0.5)                 │
│                         │  7 × rgba(24,35,42,0.2)                 │
│                         │ 14 × #18232a                            │
│                         │ 14 × #27323a                            │
│                         │  1 × #162739                            │
│                         │  3 × #0854c4                            │
│                         │  1 × #2b232a                            │
│                         │  2 × #f10e69                            │
│                         │  3 × #4e2d32                            │
│                         │  4 × #fff                               │
│                         │ 19 × #f8f8f8                            │
│                         │  1 × #000                               │
│                         │  1 × rgba(0,0,0,0)                      │
├─────────────────────────┼─────────────────────────────────────────┤
│ Unique font-sizes       │ 1 × 64px                                │
│                         │ 4 × 56px                                │
│                         │ 1 × 3.2em                               │
│                         │ 2 × 48px                                │
│                         │ 2 × 44px                                │
│                         │ 1 × 36px                                │
│                         │ 1 × 32px                                │
│                         │ 1 × 2em                                 │
│                         │ 5 × 28px                                │
│                         │ 3 × 26px                                │
│                         │ 2 × 24px                                │
│                         │ 4 × 22px                                │
│                         │ 1 × 21px                                │
│                         │ 6 × 20px                                │
│                         │ 7 × 18px                                │
│                         │ 6 × 16px                                │
│                         │ 2 × 15px                                │
│                         │ 7 × 14px                                │
│                         │ 4 × 13px                                │
│                         │ 2 × 12px                                │
│                         │ 1 × 0                                   │
├─────────────────────────┼─────────────────────────────────────────┤
│ Unique font-families    │  1 × -apple-system,BlinkMacSystemFont,… │
│                         │ 12 × 'Teko',monospace                   │
│                         │  7 × monospace,monospace                │
├─────────────────────────┼─────────────────────────────────────────┤
│ Prefixed                │ N\A                                     │
└─────────────────────────┴─────────────────────────────────────────┘
```

## Related

- [CSS Analyzer](https://github.com/projectwallace/css-analyzer) - The analyzer that powers this module
- [Gromit](https://github.com/bartveneman/gromit) - A test framework to assert that CSS doesn't exceeds certain tresholds.
- [CSS Analyzer Diff](https://github.com/bartveneman/css-analyzer-diff) - Calculates the diff between two sets of CSS analysis
