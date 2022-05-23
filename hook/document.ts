import { useEffect } from 'react'

/**
 * 修改页面标题
 * @param title 页面标题
 */
export const useTitle = (title: string) => {
    useEffect(() => {
        document.title = title
    })
}
