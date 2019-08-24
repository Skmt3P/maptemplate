import dayjs from 'dayjs'
import 'dayjs/locale/ja'
dayjs.locale('ja')

/**
 * 現在時刻からN日後の日付を取得
 * @param {Number} num N日後の日付
 * @param {String} 変換したいフォーマット
 * @returns {String}
 */
export const getDaysAfter = (num, format = 'YYYY-MM-DD HH:mm:sss') => {
  const day = dayjs()
    .add(num, 'day')
    .format(format)
  return day
}

/**
 * 現在時刻からN日前の日付を取得
 * @param {Number} num N日前の日付
 * @param {String} 変換したいフォーマット
 * @returns {String}
 */
export const getDaysBefore = (num, format = 'YYYY-MM-DD HH:mm:sss') => {
  const day = dayjs()
    .subtract(num, 'day')
    .format(format)
  return day
}

/**
 * フォーマットを指定して現在の日付を取得
 * @param {String} 変換したいフォーマット
 */
export const getDay = (format = 'YYYY-MM-DD HH:mm:sss') =>
  dayjs().format(format)

/**
 * 日付時刻をフォーマットする
 * @param {Number} timestamp
 */
export const timestampFormat = (timestamp, format = 'YYYY-MM-DD HH:mm:sss') =>
  dayjs(timestamp).format(format)

/**
 * 有効な日付かどうか
 * @param {String} day '2019-05-27' こんな感じで渡す
 */
export const dayIsValid = day => dayjs(day).isValid()

/**
 * 日付を比較
 * @param {String} day1
 * @param {String} day2
 */
export const CompareDate = (day1, day2) => dayjs(day1).isBefore(day2)
