# Catalyst Streamable Components Demo

These code examples demonstrate the use of Catalyst's `<Stream>` component.

`<Stream>` provides a layer of abstraction that enables a developer-friendly pattern for creating and using components, meeting the following design goals:

* Optimization for `<Suspense>` fallbacks and Next.js partial prerendering
* Flexible components concerned only with visual presentation, not responsible for their own data fetching
* Components that can be used in a server-side or client-side context with asynchronous data
* Support for receiving both synchronous and asynchronous data
* Data fetching done as far down as possible in the component tree

## Examples

See `core/components/custom/top-categories` for the following examples.

The various examples (one at a time) are rendered on the home page in `core/app/[locale]/(default)/page.tsx`.

### Slow Data Fetching

[This data fetch](https://github.com/bigcommerce-edu/demo-catalyst-streamable/compare/start...top-categories-data?diff=split) used in all example scenarios has an [artificial delay](https://github.com/bigcommerce-edu/demo-catalyst-streamable/compare/top-categories-data...fetch-delay?diff=split) to simulate a slow data fetch operation.

### Scenarios

* [Scenario #1](https://github.com/bigcommerce-edu/demo-catalyst-streamable/compare/fetch-delay...scenario-1?diff=split) demonstrates the effect of using the component as-is (which blocks the rendering of the entire page).
* [Scenario #2](https://github.com/bigcommerce-edu/demo-catalyst-streamable/compare/scenario-1...scenario-2?diff=split) demonstrates using native `<Suspense>` to provide a fallback and then stream in the rendered component.
* [Scenario #3](https://github.com/bigcommerce-edu/demo-catalyst-streamable/compare/scenario-2...scenario-3?diff=split) makes the handling of `<Suspense>` the concern of the component itself.
* [Scenario #4](https://github.com/bigcommerce-edu/demo-catalyst-streamable/compare/scenario-3...scenario-4?diff=split) moves data fetching out of the component, making the component concerned only with visual presentation.
* [Scenario #5](https://github.com/bigcommerce-edu/demo-catalyst-streamable/compare/scenario-4...scenario-5?diff=split) demonstrates the use of `<Stream>` to accomplish the same goals as previous scenarios, with a cleaner developer experience, and also with support for synch/async data and either server-side or client-side context.
* [Scenario #6](https://github.com/bigcommerce-edu/demo-catalyst-streamable/compare/scenario-5...scenario-6?diff=split) introduces `Streamable.from` to wrap the data fetching operation in a "lazy promise" that won't be executed until it's awaited.
