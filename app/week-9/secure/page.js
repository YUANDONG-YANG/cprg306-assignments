"use client"
import {useUserAuth} from "../_utils/auth-context";

export default function Page() {
    const {user} = useUserAuth();

    if (!user) {
        return (
            <div>
                <h1> Week 9- A secured page</h1>
                <p>Go away -You cannot access this page and you must sign in</p>
            </div>
        );
    }
    return (
        <div>
            <h1>Secured Page</h1>
            <p>This page is only accessible by logged in users</p>
            <p>Welcome back, {user.displayName}</p>
        </div>
    );
}