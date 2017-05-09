# No Root Type Selectors

Rule `no-root-type-selectors` will enforce that type selectors are not allowed in the root level.

Useful for a CSS MODULES approach. Enforces the wrapping of type selectors.

## Examples

The following are disallowed:

```scss

div {
  content: 'foo';
}

ul {
  content: 'foo';
}

input[type='email'] {
  content: 'foo';
}

input.bar {
  content: 'foo';
}

```


### the type selectors will need to be wrapped

The following is allowed:

```scss

.bar {
  div {
    content: 'foo';
  }

  ul {
    content: 'foo';

    li {
      content: 'foo';
    }
  }

  input[type='email'] {
    content: 'foo';
  }
}
```
