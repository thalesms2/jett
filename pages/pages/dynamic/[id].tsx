import { useRouter } from "next/router"

const Dynamic = () => {
    const router = useRouter()
    const { id } = router.query

    return <p>Id dinamico: {id}</p>
}

export default Dynamic