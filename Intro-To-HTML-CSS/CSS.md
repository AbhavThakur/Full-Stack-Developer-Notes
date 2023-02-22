# CSS Notes

# CSS Grid

## Grid

- display: grid;
- grid-template-columns: 100px 1fr; (fr - free space)
  \
  (add the number of value which corresponds to the size of each column in grid like 100px 100px 100px shows 3 columns with 100px size.) (use fr to use remaining free space)
- column-gap:10px
- row-gap:10px

## Flexbox (Flexible layout)

- display: flex;
- flex:1;

## CSS Positioning

- position: absolute;
- position: fixed;
- position: relative;
- position: sticky;

## Responsive Layout

- Media Queries
- @media screen and (max-width: 600px) {
  h1 {
    font-size: 50px;
  }
}

# CSS Transitions

- transition: all 0.2s ease-in-out;

# CSS Animations

- animation: animation-name 3s ease-in-out; (animation-name is the name of the keyframes)
- @keyframes animation-name {
  0% { color: red; }
  100% { color: blue; }
  }
- animation: animation-name 3s ease-in-out infinite; (infinite for infinite loop)
- animation: animation-name 3s ease-in-out alternate; (alternate for alternate animation)
- animation: animation-name 3s ease-in-out alternate-reverse; (alternate-reverse for alternate animation in reverse direction)


# CSS Fonts

- font-family: 'Oswald', sans-serif;
- font-size: 20px;
- font-weight: 400;
- font-style: italic;
- text-transform: uppercase;
- text-align: center;
- text-decoration: underline;
- line-height: 1.5;
- letter-spacing: 2px;
- word-spacing: 2px;

# CSS Box Model

- margin: 20px 10px 20px 10px; (margin-top, margin-right, margin-bottom, margin-left)
- margin: 20px 10px 20px; (margin-top, margin-right & left, margin-bottom)
- margin: 20px 10px; (margin-top & bottom, margin-right & left)
- margin: 20px; (margin-top, margin-right, margin-bottom, margin-left)
- padding: 20px 10px 20px 10px; (padding-top, padding-right, padding-bottom, padding-left)
- padding: 20px 10px 20px; (padding-top, padding-right & left, padding-bottom)
- padding: 20px 10px; (padding-top & bottom, padding-right & left)
- padding: 20px; (padding-top, padding-right, padding-bottom, padding-left)
- border: 1px solid red; (border-width, border-style, border-color)
- border: 1px solid #ccc; (border-width, border-style, border-color)
- border: 1px solid rgb(0, 0, 0); (border-width, border-style, border-color)
- border: 1px solid rgba(0, 0, 0, 0.5); (border-width, border-style, border-color)
- border: 1px solid hsl(0, 0%, 0%); (border-width, border-style, border-color)
- border: 1px solid hsla(0, 0%, 0%, 0.5); (border-width, border-style, border-color)
- border-radius: 10px;
- box-shadow: 10px 10px 7px red;
- box-sizing: border-box;
- overflow: hidden;
- overflow: scroll;
- overflow: auto;
- overflow-x: hidden;
- overflow-y: hidden;
- overflow-x: scroll;
- overflow-y: scroll;
- overflow-x: auto;
- overflow-y: auto;
- overflow-x: visible;
- overflow-y: visible;

# CSS Colors

- color: red;
- color: #f00; (hexadecimal)
- color: rgb(255, 0, 0); (red, green, blue)
- color: rgba(255, 0, 0, 0.5); (red, green, blue, alpha)
- color: hsl(0, 100%, 50%); (hue, saturation, lightness)
- color: hsla(0, 100%, 50%, 0.5); (hue, saturation, lightness, alpha)

# CSS Units

- em
- rem
- %

# CSS Selectors

- .class
- #id
- element
- *
- element, element
- element element
- element > element
- element + element
- :hover
- :active
- :focus
- ::before
- ::after

# CSS Variables

- --main-bg-color: red;

# CSS Specificity

- Inline styles
- IDs
- Classes, attributes and pseudo-classes
- Elements and pseudo-elements

# CSS Float

- float: left;
- float: right;
- float: none;
- clear: left;
- clear: right;
- clear: both;
- clear: none;

# CSS Display

- display: block;
- display: inline;
- display: inline-block;
- display: flex;
- display: inline-flex;
- display: grid;
- display: inline-grid;
- display: table;
- display: inline-table;
- display: table-row-group;
- display: table-header-group;
- display: table-footer-group;
- display: table-row;
- display: table-column-group;
- display: table-column;
- display: table-cell;
- display: table-caption;
- display: list-item;
- display: run-in;
- display: compact;
- display: marker;
- display: table-row-group;
- display: table-header-group;
- display: table-footer-group;
- display: table-row;
- display: table-column-group;
- display: table-column;
- display: table-cell;
- display: table-caption;
- display: ruby;
- display: ruby-base;
- display: ruby-text;
- display: ruby-base-container;
- display: ruby-text-container;
- display: contents;
- display: none;

# CSS Background

- background-color: red;
- background-image: url("img_tree.png");
- background-repeat: repeat;
- background-repeat: repeat-x;
- background-repeat: repeat-y;
- background-repeat: no-repeat;
- background-position: left top;
- background-position: left center;
- background-position: left bottom;
- background-position: right top;
- background-position: right center;
- background-position: right bottom;
- background-position: center top;
- background-position: center center;
- background-position: center bottom;
- background-attachment: scroll;
- background-attachment: fixed;
- background-size: cover;
- background-size: contain;

# CSS Box

- width: 300px;
- height: 100px;
- min-width: 300px;
- min-height: 100px;
- max-width: 300px;
- max-height: 100px;

# CSS Pseudo Classes

- :link
- :visited
- :hover
- :active
- :focus
- :first-letter
- :first-line
- :first-child
- :before
- :after
- :nth-child()
- :nth-last-child()
- :nth-of-type()
- :nth-last-of-type()
- :last-child
- :first-of-type
- :last-of-type
- :only-of-type
- :only-child
- :empty
- :root
- :target
- :enabled
- :disabled
- :checked
- :not()
- :lang()
- :selection
- ::first-line
- ::first-letter
- ::before
- ::after
- ::selection
- ::backdrop
- ::placeholder
- ::marker
- ::spelling-error
- ::grammar-error

# CSS Pseudo Elements

- ::first-line
- ::first-letter
- ::before
- ::after
- ::selection
- ::backdrop
- ::placeholder
- ::marker
- ::spelling-error
- ::grammar-error

# CSS Media Query

- @media screen and (max-width: 600px) {
    body {
        background-color: lightblue;
    }
}

# CSS Positioning

- position: static;
- position: relative;
- position: absolute;
- position: fixed;
- position: sticky;

# CSS Flexbox

- flex-direction: row;
- flex-direction: row-reverse;
- flex-direction: column;
- flex-direction: column-reverse;
- flex-wrap: nowrap;
- flex-wrap: wrap;
- flex-wrap: wrap-reverse;
- justify-content: flex-start;
- justify-content: flex-end;
- justify-content: center;
- justify-content: space-between;
- justify-content: space-around;
- justify-content: space-evenly;
- align-items: flex-start;
- align-items: flex-end;
- align-items: center;
- align-items: baseline;
- align-items: stretch;
- align-content: flex-start;
- align-content: flex-end;
- align-content: center;
- align-content: space-between;
- align-content: space-around;
- align-content: stretch;
- order: 5;
- flex-grow: 4;
- flex-shrink: 3;
- flex-basis: 25%;
- flex: 1 100px;
- align-self: auto;
- align-self: flex-start;
- align-self: flex-end;
- align-self: center;
- align-self: baseline;
- align-self: stretch;

# CSS Grid

- grid-template-columns: 50px 100px 50px;
- grid-template-columns: 50px 100px auto;
- grid-template-columns: 50px 100px 50px 100px;
- grid-template-columns: repeat(4, 50px);
- grid-template-columns: repeat(4, 1fr);
- grid-template-columns: repeat(4, 1fr 2fr);
- grid-template-columns: repeat(4, 1fr 2fr 3fr);
- grid-template-columns: repeat(4, 1fr 2fr 3fr 4fr);
- grid-template-columns: repeat(4, 1fr 2fr 3fr 4fr 5fr);
- grid-template-columns: repeat(4, 1fr 2fr 3fr 4fr 5fr 6fr);
- grid-template-columns: repeat(4, 1fr 2fr 3fr 4fr 5fr 6fr 7fr);
- grid-template-columns: repeat(4, 1fr 2fr 3fr 4fr 5fr 6fr 7fr 8fr);
- grid-template-columns: repeat(4, 1fr 2fr 3fr 4fr 5fr 6fr 7fr 8fr 9fr);
- grid-template-columns: repeat(4, 1fr 2fr 3fr 4fr 5fr 6fr 7fr 8fr 9fr 10fr);
- grid-template-columns: repeat(4, 1fr 2fr 3fr 4fr 5fr 6fr 7fr 8fr 9fr 10fr 11fr);
- grid-template-columns: repeat(4, 1fr 2fr 3fr 4fr 5fr 6fr 7fr 8fr 9fr 10fr 11fr 12fr);
- grid-template-columns: repeat(4, 1fr 2fr 3fr 4fr 5fr 6fr 7fr 8fr 9fr 10fr 11fr 12fr 13fr);
- grid-template-columns: repeat(4, 1fr 2fr 3fr 4fr 5fr 6fr 7fr 8fr 9fr 10fr 11fr 12fr 13fr 14fr);
- grid-template-columns: repeat(4, 1fr 2fr 3fr 4fr 5fr 6fr 7fr 8fr 9fr 10fr 11fr 12fr 13fr 14fr 15fr);
- grid-template-columns: repeat(4, 1fr 2fr 3fr 4fr 5fr 6fr 7fr 8fr 9fr 10fr 11fr 12fr 13fr 14fr 15fr 16fr);


