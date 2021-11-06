# Social media dashboard theme switcher using React and Sass

![Design preview for the Social media dashboard with theme switcher coding challenge](public/assets/desktop-preview.jpg)

## Table of contents

- [The challenge](#the-challenge)
- [Links](#Links)
- [My process](#My-process)

## The challenge

The challenge is to build out this Social Media Dashboard and get it looking as close to the design as possible.

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

## Links

- [live site url](https://gracious-galileo-288f6d.netlify.app/)

## My process

This is my first challenge using React js, I took accessibility into consideration from the beginning, trying to make all the interactive components accessible (toggle switch and the cards ), also I made sure to use the right HTML markup for every element before adding any style.

For the theme toggle button, there are different solutions to build an inclusive toggle switch, for this case I used `aria-pressed` to toggle accessible state (dark/light).

For the cards also there are quite different approaches to build accessible cards [check this link](https://inclusive-components.design/cards/) with all those approaches the one that is considered a more robust solution, is adding a simple script to the `Onclick` event of the whole block then using the `<a>` link inside the `<h2>` as the target of the `OnClick`. In that way the whole block is clickable, and we're likely to have the most descriptive link text.

When it comes to the color scheme, the first time the page is loaded, the color mode set on the preference is used and then set as 'default' in the local storage. Changing the default preferences works the same way as changing the color mode using the buttons if the page is loaded.

When the page is reloaded, whatever is the value set on the local storage has precedence over the values in the preference. If the preference

changed after the page was visited - and the page is not loaded - the last value saved on the local storage is loaded.

For styling I tried to use only grids to set the layout without any media queries, Sass is really cool when it comes to style structuring, so I divided the style folder into different subfolders to keep everything neat and clean.

I didn't want to go for creat-react-app to set my environment because it does all the magic for us, so I used Parcel (for such a small project it works very because it has 0 configurations).

Thank you for reading so far,

Please if there is any improvement feel free to contribute

Made with 💖 by [Zineb Boutaa](https://zineb-bou.github.io/)
