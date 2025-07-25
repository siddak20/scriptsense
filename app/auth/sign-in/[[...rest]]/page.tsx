import { SignIn } from "@clerk/nextjs"


const page = () => {
  return (
    <div className="flex justify-center min-h-screen items-center py-10">
        <SignIn />
    </div>
  )
}

export default page