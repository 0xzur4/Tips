import UploadAvatars from "@/app/components/uploadAvatar"


type pageProps = {
  params:{
    username: String
  }
}

export default async function page({params}: pageProps){
  const {username} = await params
  return(
    <section className="flex flex-col items-center min-h-screen">
      <div className="w-[50%] p-4">
      <header className="flex gap-4">
        <UploadAvatars />
        <h1>{username}</h1>
      </header>
      <div>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque aspernatur nisi nemo atque, velit incidunt sed distinctio corrupti voluptatum unde facere ut voluptates, explicabo dolores magni perferendis obcaecati ipsum enim?
          </p>
        </div>
      </div>
      </div>
    </section>
  )
}