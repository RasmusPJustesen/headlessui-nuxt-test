## Required libraries
```
tailwindcss
@headlessui/vue
@headlessui/tailwindcss
```

## How to use

This directory is meant to be used as a subtree in your project.

### Add as a subtree to your project

```
git subtree add --prefix components/ui https://github.com/RasmusPJustesen/vue-ui-lib.git master --squash
```

### Pull in changes made elsewhere subtree

```
git subtree pull --prefix components/ui https://github.com/RasmusPJustesen/vue-ui-lib.git master --squash
```

_Recommended to add this as a command in your package.json for quick alignment_

### Push changes made in your project to subtree

```
git subtree push --prefix components/ui https://github.com/RasmusPJustesen/vue-ui-lib.git master
```

_Recommended to add this as a command in your package.json for quick alignment_

---
