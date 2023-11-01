import { FC } from 'react';
import Link from 'next/link';

interface Props {}

const Navbar: FC<Props> = (props): JSX.Element => {
    return (
        <nav className='nav mb-2 flex flex-row justify-between text-3xl text-button ease-in-out ' data-them='dark'>
            <ul className="flex flex-row justify-center w-full">
                <li className="mx-4 btn-ghost rounded">
                    <Link href={'/'}>
                        Home
                    </Link>
                </li>
                <li className="mx-4 btn-ghost rounded">
                    <Link href={'/about'}>
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;