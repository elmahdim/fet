# A front-end template for building web apps or sites

## Changing a remote's URL
```
git remote set-url origin https://...
```

## Get started

```
git clone https://github.com/elmahdim/fet.git
```

## Installation

```
npm install
```

## Automation tasks

Your project custom theme

```
gulp theme --name=theme17
```

Start the server and watch any changes

```
npm start
```

Clean npm, bower packages

```
gulp clean:pkg
```

Clean build

```
gulp clean:build --v=buildnumber
```

Build (minify, concat and complie *.jade files)

```
gulp build
```
