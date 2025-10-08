### HMR

实时预览，修改会触发浏览器刷新
如果更新是一些组件的内容，不会触发浏览器更新，直接去修改内容的

### HMR API

需要注意的有两个 hot.accept(cb) 和 hot.dispose(cb)

`import.meta.hot` 用的是这底下的 API
