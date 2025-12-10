export default async function userPage({params}: {params: Promise<{slug :String}>}){
    const username = (await params).slug;
    return(
        <section>
            <h1>Username</h1>

            <h1>{username}</h1>
        </section>
    )
}