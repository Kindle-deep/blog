# Friends Shortcode Documentation

The `friends` shortcode provides an enhanced way to display multiple friend links in a responsive grid layout with improved styling.

## Usage

The shortcode accepts friend data in a pipe-separated format within the shortcode tags:

```
{{< friends >}}
Name|URL|Avatar|Bio
Name|URL|Avatar|Bio
{{< /friends >}}
```

## Example

```
{{< friends >}}
天翔TNXGの空间站|https://tnxgmoe.com/|https://api-space.tnxg.top/avatar?s=qq|明日尚未到来，希望凝于心上
示例朋友|https://example.com/|https://example.com/avatar.jpg|这是一个示例朋友的描述
{{< /friends >}}
```

## Features

- **Responsive Grid Layout**: Automatically adjusts to screen size
- **Enhanced Hover Effects**: Cards lift and show border highlights on hover
- **Dark Mode Support**: Automatically adapts to light/dark themes
- **Consistent Styling**: Matches the site's design language
- **Mobile Optimized**: Single column layout on smaller screens

## Comparison with Individual Friend Shortcode

The new `friends` shortcode provides:

1. **Better Layout**: Automatic responsive grid instead of manual div/grid setup
2. **Enhanced Styling**: Improved hover effects, shadows, and transitions
3. **Consistency**: All friend cards have uniform styling and spacing
4. **Maintainability**: Easier to add/remove friends without manual HTML

## Styling

The shortcode uses CSS classes:
- `.friends-container`: Main wrapper
- `.friends-grid`: Grid container with responsive columns
- `.friend-link`: Individual friend card (enhanced version)
- `.friend-link-div`: Card content container
- `.friend-avatar`: Avatar image
- `.friend-link-info`: Text information container
- `.friend-name`: Friend's name
- `.friend-bio`: Friend's bio/description

All existing friend card styles are preserved and enhanced for better visual appeal.