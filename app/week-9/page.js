"use client";

import {useUserAuth} from "./_utils/auth-context";

export default function Page() {
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();
    console.log(user);

    return (
        <div>
            <h1 className="text-2xl font-bold">
                Week 9 - Authentication using Firebase
            </h1>
            <p>Some Content</p>
            <p>
                {user ? (
                    <button onClick={firebaseSignout}>Sign Out</button>
                ) : (
                    <button onClick={githubSignIn}>Sign In with Github</button>
                )}
            </p>

            {user && (
                <div>
                    <p>
                        Welcome, {user.displayName}. Your email is {user.email}. Here is your image:
                    </p>
                    <img src={user.photoURL} alt={user.displayName}/>
                </div>
            )}
        </div>
    );
}
