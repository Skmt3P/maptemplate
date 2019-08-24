/**
 * Throttle function
 * 最初のイベント発生から、何度連続してイベントが発生しても処理はせず、指定時間経過後に規則的に処理を実行する感じ
 * @param  {Function} callback
 * @param  {Numbner}  wait
 * @param  {Object}   [context=this]
 * @return {Function}
 */
export default (callback, wait, context = this) => {
  let timeout = null
  let callbackArgs = null
  const later = () => {
    callback.apply(context, callbackArgs)
    timeout = null
  }
  return function() {
    if (!timeout) {
      callbackArgs = arguments
      timeout = setTimeout(later, wait)
    }
  }
}
