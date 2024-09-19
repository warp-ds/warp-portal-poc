# Tokens
TODO: description

## Supported brands
WARP is supporting multiple Schibsted Marketplace brands, we’re currently working on adding more brands and support for each brand.

::: image-block
![Status overview showing FINN and Tori is live](/images/foundations/supported-brands.png)
:::

## Design tokens

### Structure
In a multi-brand design system, design tokens play a vital role in maintaining consistency and flexibility across the different brands. Design tokens are the atomic units of a design system, representing the visual properties such as colours, typography, spacing, and other style attributes.

They serve as a centralised and reusable source of truth for design decisions, enabling designers and developers to quickly adapt and customise the visual aspects of each brand within the system.

By defining design tokens, we establish a common language that can be easily translated and applied across different brands, ensuring a cohesive and harmonious user experience. These tokens provide a level of abstraction that simplifies the process of updating and managing brand-specific styles, making it more efficient and scalable.

::: image-block
![Displays how the hexvalue "#0063FB" points to the color token "Blue-600", used in the conponent token "color-button-primary-background", ultimately pointing to the button component](/images/foundations/design-token-structure.png)
:::

### Semantic tokens
TODO: description

### Custom components and design
Semantic tokens are not connected to any specific component and can be used to create custom designs that are still multi-brand friendly.

If you are building a component that doesn’t exist in WARP you can still use semantic tokens and get support for dark mode and all other SMP brands for free.

::: image-block
![A sample design where "Background/Primary-Subtle" and "Border-Primary-Subtle" are highligted](/images/foundations/custom-components-and-design.png)
:::

### Access the semantic tokens
You find the semantic tokens in the right sidebar and they practically work like a normal Figma style.

We are working on a more in-depth guide on semantic tokens, it will be linked from here.

::: image-block
![Figma interface showing multiple backgorund options and "Primary-Subtle" is highligted](/images/foundations/access-the-semantic-tokens.png)
:::

### Modes
TODO: description

**Switch modes**
Connecting the design tokens to Figma variables makes it possible to easily switch between brands and light/dark modes. This is also available in the right sidebar, more on mode switching in the “Switch brands” section

::: image-block
![Figma interface showing a selected button and the available modes for NMP brands and light/dark mode options](/images/foundations/switch-modes.png)
:::