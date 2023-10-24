import { UserButton, auth } from '@clerk/nextjs';
import Link from 'next/link';

const Navbar = () => {
    const { userId } = auth();

    return (
        <div className='px-5 mb-5 w-screen flex justify-between'>
            <div>
                <h3>Next Sanity Dash</h3>
            </div>
            <div>
                {!userId && <Link href="/sign-in">Sign In</Link>}
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    )
}

export default Navbar;