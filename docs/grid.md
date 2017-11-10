# Grid

## Grid size:

1. Large - 12 columns
2. Medium - 8 columns
3. Small - 4 columns

## Available grid mixins:
```
@mixin grid-container
@mixin nested-grid-container
@mixin span
@mixin custom_column
```

## Using grid
#### Example 1
>div elements side by side. 1st element use space of 3 columns, 2nd element use space of 2 columns.

```
<style>
  .grid-container {
    @mixin grid-container;
  }

  .first-element {
    @mixin span 3, 12, lg;
  }

  .second-element {
    @mixin span 2, 12, lg;
    @mixin custom-column 1, 12, lg, margin-left;
    /* Custom column creates margin equal to 1 column size */
  }
</style>

<div class="grid-container">
 <div class="first-element"></div>
 <div class="second-element"></div>
</div>
```

Result: [XXX-XX------]

#### Example 2
> Using nested-grid-container

> 
```
<style>
  .grid-container {
    @mixin grid-container;
  }

  .first-element {
    @mixin span 3, 12, lg;

    /* This element is also container. */
    @mixin nested-grid-container;

    /* You can see here that we have written 3 instead of 12. This is very important because our container has size of 3 columns. */
    .child-element {
      @mixin span 1, 3, lg;
    }

    .second-child-element {
      @mixin span 2, 3, lg;
    }
  }

  .second-element {
    @mixin span 2, 12, lg;
    @mixin custom-column 1, 12, lg, margin-left;
    /* Custom column creates margin equal to 1 column size */
  }
</style>

<div class="grid-container">
 <div class="first-element">
  <div class="child-element">
  </div>
  <div class="second-child-element">
  </div>
 </div>
 <div class="second-element"></div>
</div>
```

Result: [[XXX]-XX------]