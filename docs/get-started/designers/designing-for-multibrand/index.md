# Designing for multibrand
WARP is built to support multiple themes and your designs should be able to be used for all nordic Schibsted Marketplace brands.

There are certain principles that are important to follow in order for this to work.

## Auto layout
Auto layout is a property you add to frames and components. It lets you create designs that grow to fill or shrink to fit, and reflow as their contents change.

### Be an effective designer
Auto layout is a property you add to frames and components. It lets you create designs that grow to fill or shrink to fit, and reflow as their contents change.

::: image-block
![Content transistioning from small screen to large screen](/public/images/get-started/be-an-effective-designer.png)
:::

### Multibrand
Since all WARP components have support for multiple brands it's important that you use auto layout in all your designs.

Differences in the brands like typography, spacing and language can cause the components to be different in sizes and if you don't use auto layout your designs might break when switching between brands.

::: image-block
![WARP alert components displayed in the FINN brand and Tori brand](/public/images/get-started/multibrand-alerts.png)
:::

### Learn how to use auto layout
If you don't already know how it works, consult with a visual designer in your team and see if they can show you the ropes. Otherwise there are several great resources to get you started:

- [How to use auto layout](https://www.figma.com/file/exuWKnSIbdxvMBCRdyl6A9/Auto-layout-Guidelines?type=design&node-id=0-1&mode=design)
- [Learn Figma Auto Layout in 10 Minutes (Everything You Need To Know)](https://www.youtube.com/watch?v=To_ADCVSg5g)
- [Using auto layout](https://help.figma.com/hc/en-us/articles/5731482952599-Using-auto-layout)


## Switch brands
When working with multiple brands it's important to be able to see what your designs look like with another brand.

### Default component styling
The components in Warp are based on the old FINN design system called Fabric and the default styling of every component is therefore in the style of FINN.

::: image-block
![FINN button with the text "Confirm"](/public/images/get-started/default-component-styling.png)
:::

### Variables in Figma
When designing with a multi-brand design system it's important to see what your designs looks like in a different brand. Luckily with the newly added variables functionality in Figma this is an easy task.

Switching brands will change the tokens for all components which resulting colours, typography, border radiuses and other things to be different for each brand.

::: image-block
![FINN confirm button with a pointing arrow to a Tori confirm button](/images/get-started/variables-in-figma.png)
:::

Switching brands will change the tokens for all components which resulting colours, typography, border radiuses and other things to be different for each brand.

::: image-block
![Figma interface of a selected button pointing to the switch brand functionality](/images/get-started/variables-in-figma2.png)
:::

Select a WARP component and select change variable mode in Layer settings in the right sidebar.

::: image-block
![Figma interface higtligting the selected frame is set to "Tori Light"](/images/get-started/variables-in-figma3.png)
:::

Tip! You can also switch brands on entire frames and everything using variables will change.