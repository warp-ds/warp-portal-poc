# Warp in Figma
TODO: Lorizzle ipsum dolor mammasay mammasa mamma oo sa amizzle, consectetuer adipiscing elit. Nullizzle fizzle velizzle, shiz volutpat, suscipit go to hizzle, gravida vizzle, bling bling. 

## Elevation
Elevation is the distance between different surfaces on the z-axis.

### The basics
Auto layout is a property you add to frames and components. It lets you create designs that grow to fill or shrink to fit, and reflow as their contents change.

**Visualising the height difference**
Elevation is a concept used to visually differentiate the height between different elements. In light mode this is easy with the use of shadows but in dark mode we can’t rely as much on shadows to show the height difference.

![img info](https://i.imgur.com/OvMZBs9.jpg)

Think of dark mode as a dark room with a small light source on the ceiling: the closer an object is to the light, the lighter its surface appears.In light mode, we can use shadows to make this clear. However, in dark mode shadows are less effective for showing differences in height.

### Why use elevation?Since all WARP components have support for multiple brands it’s important that you use auto layout in all your designs.

Differences in the brands like typography, spacing and language can cause the components to be different in sizes and if you don’t use auto layout your designs might break when switching between brands.

**Depth**
In light mode, elevation tokens can be used to create subtle shadows beneath UI elements, giving them a sense of elevation and depth. For example, cards can appear to float above the background.

In dark mode, elevation tokens can be inverted to create highlights instead of shadows, providing depth without compromising the overall dark aesthetic. This helps maintain consistency in design across different modes.

**Readability**
By adjusting the elevation of elements such as boxes, popovers or tooltips, designers can ensure that important content stands out against the background, improving readability and user experience.

**Consistency**
By defining elevation tokens as part of a design system, consistency can be maintained across different components and screens of an application.

Designers can easily switch between light and dark modes without needing to redefine elevation values, streamlining the design process and ensuring a cohesive user experience.

### Surfaces
In WARP there are five surfaces that all represent a different elevation value. The ones elevated above “Default” have a shadow as well.

All SMP brands use the same grayscale to make accessibility easier to maintain.

![img info](https://i.imgur.com/OvMZBs9.jpg)

**Sunken**
The lowest elevation used as a backdrop for other content. Use only below the default elevation and never on any of the elevated surfaces.

**Default**
The baseline flat surface

**Elevated-100**
Used for modals and drawers. Uses the medium shadow

**Elevated-200**
Used for cards. Uses the small shadow.

**Elevated-300**
The highest elevation, used for popover, menu and dropdowns. Uses the large shadow

## Dark mode
WARP offers light and dark mode for all brands.

**Support in WARP**
All components and tokens in WARP are built with dark mode in mind. Therefore there’s not much you need to consider when creating your designs

![img info](https://i.imgur.com/OvMZBs9.jpg)

### Switch to dark mode
You can switch to dark mode whenever you want, either for a specific component or an entire frame. This is available in the right sidebar.It’s always a good idea to see what your designs look like in dark mode to make sure colour contrasts are good enough and that illustrations and graphics are optimised for a darker setting.

![img info](https://i.imgur.com/OvMZBs9.jpg)