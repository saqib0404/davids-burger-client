import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - David's Burger`
    }, [title])
}

export default useTitle;