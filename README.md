# mobilev2

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

### Lints and fixes files
```
npm run lint
```

> 修复android浏览器键盘弹出input不在视图问题
```
if(/Android [4-6]/.test(navigator.appVersion)) {
    window.addEventListener("resize", function() {
        if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA") {
            window.setTimeout(function() {
                document.activeElement.scrollIntoViewIfNeeded();
            },0);
        }
    })
}
```
