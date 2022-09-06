# Multi Steps Form Component for Bootstrap

Easily create a multi-step form for bootstrap.

- Bootstrap like sintaxis component
- No Js configuration required
- Installation with CDN

## Demo

https://manuelernestog.github.io/bootstrap-multi-steps-component/

## Requirements

Before include multi-steps-form you should install [Bootstrap](https://getbootstrap.com/) in your project.

## Installation

Simply include CDN file in your project. Put the CSS file inside `<head>` tag and the Js file in the bottom of your `<body>` tag.

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-multi-steps-component@1.0.2/dist/bootstrap-multi-steps-component.min.css" type="text/css" media="all" />
...
<script src='https://cdn.jsdelivr.net/npm/bootstrap-multi-steps-component@1.0.2/dist/bootstrap-multi-steps-component.min.js'></script>
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











