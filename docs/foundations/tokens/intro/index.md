# Tokens
Design tokens serve as the definitive source for naming and storing visual properties.

In a multi-brand design system, design tokens play a vital role in maintaining consistency and flexibility across the different brands. Design tokens are the atomic units of a design system, representing the visual properties such as colours, typography, spacing, and other style attributes.

They serve as a centralised and reusable source of truth for design decisions, enabling designers and developers to quickly adapt and customise the visual aspects of each brand within the system.

By defining design tokens, we establish a common language that can be easily translated and applied across different brands, ensuring a cohesive and harmonious user experience. These tokens provide a level of abstraction that simplifies the process of updating and managing brand-specific styles, making it more efficient and scalable.

## Supported brands
WARP is supporting multiple Schibsted Marketplace brands, we’re currently working on adding more brands and support for each brand.

<!--- 
TODO
Add token support status on brands: https://nmp-jira.atlassian.net/browse/WARP-591
(dtalakoubi404 - Sep 30 2024)
-->

| Brand       | Figma       | Web         | iOS         | Android     |
| ----------- | ----------- | ----------- | ----------- | ----------- |   
| FINN        | Live ✅     | Live ✅     | Live ✅     | Live ✅     |
| Tori        | Live ✅     | Live ✅     | Live ✅     | Live ✅     |
| DBA         | Live ✅     | Live ✅     | Live ✅     | Live ✅     |
| Blocket     | TBA ⌛      | TBA ⌛      | TBA ⌛      | TBA ⌛      |
| Bilbasen    | TBA ⌛      | TBA ⌛      | TBA ⌛      | TBA ⌛      |
| Oikotie     | TBA ⌛      | TBA ⌛      | TBA ⌛      | TBA ⌛      |

## Semantic colour tokens

### Intro
This is a visualization of all the semantic colour tokens existing in WARP, use it as a reference to see what’s available and the difference between brands.

::: image-block
![Displays how the hexvalue "#0063FB" points to the primitive color "Blue-600", used in the semantic token "color-background-primary", ultimately pointing to the pill component](/images/foundations/design-token-structure.png)
:::

### What are semantic tokens?
Semantic tokens are not connected to any specific component and can be used to create custom designs that are still multi-brand friendly.

If you are building a component that doesn’t exist in WARP you can still use semantic tokens and get support for dark mode and all other SMP brands for free.

### Interactive states
Most of the semantic colour tokens also have hover and active states. For the sake of not causing a cognitive overload, those are not visible in this list.




Random test

<p class="text-body"> Paragraph text</p>
<p class="text-m"> Paragraph text</p>