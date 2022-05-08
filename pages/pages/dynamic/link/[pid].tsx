import { useRouter } from "next/router"

const Dynamic = () => {
    const router = useRouter()
    const { pid } = router.query

    return <p>dentro d link: {pid}</p>
}

export default Dynamic