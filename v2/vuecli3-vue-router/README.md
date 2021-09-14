# vuecli3-vue-router

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# vue-router

## histroy 和hash的区别

### history pushState

```javascript
// history.pushState()
history.pushState({},'','home')
history.pushState({},'','foo')
history.pushState({},'','bar')
history.back()
```

### history replaceState

```javascript
// history.replaceState()
history.replaceState({},'','home')
history.replaceState({},'','foo')
history.replaceState({},'','bar')
```
### history go

history.back()相当于history.go(-1)
history.forward()相当于history.go(1)

### hash

```javascript 1.8
localtion.hash='home'
```