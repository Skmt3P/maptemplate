/**
 * Debounce function
 * イベント発生後に、指定時間内に同じイベントが発生すると処理は実行されず、発生しなければ処理を実行する感じ
 * @param  {Function} fn
 * @param  {Number}   time
 */
export default (fn, time) => {
  let timeout
  return function() {
    const functionCall = () => fn.apply(this, arguments)
    clearTimeout(timeout)
    timeout = setTimeout(functionCall, time)
  }
}
