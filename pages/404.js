import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFoundPage = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, []);

  return (
    <div className='container-lg text-center my-5 h2'>
        Page doesn't exist
        <br />
        Redirect to main page after 3 seconds...
    </div>
  )
}

export default NotFoundPage