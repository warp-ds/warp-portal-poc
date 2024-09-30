# Tokens
Design tokens serve as the definitive source for naming and storing visual properties.

## Supported brands
WARP is supporting multiple Schibsted Marketplace brands, we’re currently working on adding more brands and support for each brand.

<!--- 
TODO
Add token support status on brands: https://nmp-jira.atlassian.net/browse/WARP-591
(dtalakoubi404 - Sep 30 2024)
-->

| Brand       | Status      |
| ----------- | ----------- |
| FINN        | Live ✅     |
| Tori        | Live ✅     |
| DBA         | Live ✅     |
| Blocket     | TBA ⌛      |
| Bilbasen    | TBA ⌛      |
| Oikotie     | TBA ⌛      |

## Design tokens

### Structure
In a multi-brand design system, design tokens play a vital role in maintaining consistency and flexibility across the different brands. Design tokens are the atomic units of a design system, representing the visual properties such as colours, typography, spacing, and other style attributes.

They serve as a centralised and reusable source of truth for design decisions, enabling designers and developers to quickly adapt and customise the visual aspects of each brand within the system.

By defining design tokens, we establish a common language that can be easily translated and applied across different brands, ensuring a cohesive and harmonious user experience. These tokens provide a level of abstraction that simplifies the process of updating and managing brand-specific styles, making it more efficient and scalable.

::: image-block
![Displays how the hexvalue "#0063FB" points to the color token "Blue-600", used in the conponent token "color-button-primary-background", ultimately pointing to the button component](/images/foundations/design-token-structure.png)
:::