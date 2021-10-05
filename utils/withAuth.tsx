import { useRouter } from "next/router";
import { ElementType, useEffect } from "react";
import { auth } from "../src/services/firebase";



export default function withAuth(WrappedComponent: ElementType) {

    const Wrapper = (props: unknown) => {

        const router = useRouter()

        useEffect(() => {
            const usubscribe = auth.onAuthStateChanged(user => {
                if (!user) {
                    router.replace('/')
                }
            })
            return () => {
                usubscribe()
            }
        }, [])


        return <WrappedComponent {...props} />
    }

    return Wrapper
}