# React Shape Progress Bars

`react-shape-progressbars` is a flexible and extensible React component library that allows you to visualize progress using various shape-based progress bars.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Supported Shapes](#supported-shapes)
- [Custom Shape](#custom-shape)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install `react-shape-progressbars` using npm:

```bash
npm install @demigod916/react-shape-progressbars
```

Or using yarn:

```bash
yarn add @demigod916/react-shape-progressbars
```

## Usage

To use a shape-based progress bar in your React application:

```jsx
import React from "react";
import ProgressBar from "react-shape-progressbars";

const App = () => {
  return (
    <ProgressBar shape="circle" value={50} />
  );
};

export default App;
```

## Props

| Prop              | Description                                                         | Type                         | Default Value   |
|-------------------|---------------------------------------------------------------------|------------------------------|-----------------|
| `value`           | The current progress value (0-100).                                 | `number`                     | 0               |
| `trackColor`      | Color of the progress bar's track.                                  | `string`                     | "lightgray"     |
| `progressColor`   | Color of the progress bar's fill.                                   | `string`                     | "dodgerblue"    |
| `strokeWidth`     | Width of the progress bar's stroke.                                 | `number`                     | 3               |
| `transitionSpeed` | Speed of the progress bar's transition (in seconds).                 | `number`                     | 0.3             |
| `shape`           | Shape of the progress bar (e.g., "circle", "square").               | `string`                     | "star"          |
| `customSvg`       | Custom SVG component. Used only if shape is set to "custom".        | `ReactElement`            | -               |
| `children`        | Any child components or elements to render inside the progress bar. | `ReactNode` (optional) | -               |

## Supported Shapes

Currently, the library supports the following shapes:

- Star
- Heart
- Triangle
- Circle
- Square
- Pentagon
- Pill
- Diamond

## Custom Shape

If you'd like to use a custom shape not provided by the library, set the `shape` prop to "custom" and provide your SVG component to the `customSvg` prop.

```jsx
<ProgressBar
  shape="custom"
  value={50}
  customSvg={
    <svg>
      <path/>
    </svg>
} />
```

### Example

```jsx

<ProgressBar
  shape="custom"
  customSvg={
    <svg viewBox="0 0 115 115">
      <path d="M 8.5219935,8.660347 105.46218,8.5219909 106.47801,106.47801 10.553674,105.37116 9.8280725,12.119245 H 97.770808 l 1.01584,87.579322 -84.024494,-1.106847 -0.87072,-82.875219 h 78.364818 l 0.87072,79.554676 -74.736817,-1.38356 -0.14512,-74.573862 68.061295,0.138357 1.160961,69.731403 -65.739375,-1.38356 V 21.942519 l 58.048012,0.415068 1.596321,61.845114 -54.420011,-1.660273 -0.435361,-56.864299 47.744491,0.276712 1.451201,52.713621 -43.245771,-1.798628 -0.29024,-46.625958 34.393448,0.69178 1.741441,39.569804 -30.475207,-2.07534 -0.58048,-33.620497 23.509446,1.521915 1.160959,28.639684 -20.461925,-2.07534 0.14512,-22.413665 16.108324,0.415068 0.29024,18.124631 -12.915682,-1.660273 -0.435361,-9.823272 h 8.852322 l -0.290241,8.301358 -4.06336,-0.553424 -0.14512,-4.565747" />
    </svg>
  }
  value={value}
  strokeWidth={2}
  transitionSpeed={1}
></ProgressBar>
```

## Contributing

Contributions to `react-shape-progressbars` are welcome! Whether it's bug reports, feature requests, or code contributions, we'd love to hear from you. Please submit an issue or pull request on [GitHub](https://github.com/Demigod916/react-shape-progressbars).

## License

`react-shape-progressbars` is [MIT licensed](./LICENSE).
