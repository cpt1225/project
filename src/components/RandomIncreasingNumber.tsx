'use client'

import { useState, useEffect } from 'react'

// 设置起始日期（这里以2023年1月1日为例）
const START_DATE = new Date('2025-02-18')

// 生成基于日期的确定性随机数（10-30）
const getDailyRandom = (date: Date): number => {
  // 标准化为UTC时间避免时区问题
  const seed = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate()
  )

  // 使用简单线性同余算法生成随机数
  const random = (seed * 9301 + 49297) % 233280
  const percentage = random / 233280

  return Math.floor(percentage * 21) + 10 // 10-30
}

// 计算总增长值
const calculateTotal = (): number => {
  const today = new Date()
  const timeDiff = today.getTime() - START_DATE.getTime()
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))

  let total = 0
  for (let i = 0; i <= days; i++) {
    const currentDate = new Date(START_DATE)
    currentDate.setUTCDate(START_DATE.getUTCDate() + i)
    total += getDailyRandom(currentDate)
  }

  return total
}

export default function DailyIncrement() {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(calculateTotal() + 160832)
  }, [])

  return (
    <span className="text-blue-500">
      {total.toLocaleString()}
    </span>
  )
}