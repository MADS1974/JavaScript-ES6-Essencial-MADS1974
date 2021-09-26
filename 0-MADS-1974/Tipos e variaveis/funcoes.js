function getName() {
  return 'Marcio Adriano'
}
function logFn(fn) {
  console.log(fn())
}

const logFnResult = logFn

logFnResult(getName)
