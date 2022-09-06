# Multi Steps Form Component for Bootstrap

Easily create a multi-step form for bootstrap.

- Bootstrap like sintaxis component
- No Js configuration required
- Installation with CDN

## Requirements

Before include multi-steps-form you should install [Bootstrap](https://getbootstrap.com/) in your project.

## Installation

Simply include CDN file in your project. Put the CSS file inside `<head>` tag and the Js file in the bottom of your `<body>` tag.

```

```

## Usage

``` html
<div class="multi-steps-form faded">
    <div class="step fade active show" id="step1">
        ...
        <button class="step-link" data-bs-target="#step2">Next</button>
    </div>
    <div class="step fade" id="step2">
        ...
        <button class="step-link" data-bs-target="#step1">Back</button>
    </div>
</div>
```

Create a main `<div>` tag with class `multi-steps-form`. The class `faded` is optional, this one enable the fade effect when you move through the steps.

Inside the `multi-steps-form` tag create a `<div>` tag with class `step` for step, add a ID for each steep. 

For change between steps creat a tag with class `step-link` and add the attribute `data-bs-target="[step_id]"`.

## Contribution

Suggestions and pull requests are welcomed!











