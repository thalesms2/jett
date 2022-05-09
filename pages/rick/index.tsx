function Rick({ apiResponse }){

}

export async function getStaticProps() {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const apiRes: unknown = await res.json()

    return {
        props: {
            apiResponse: apiRes,
        },
    }
}

export default Rick