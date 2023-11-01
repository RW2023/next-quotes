import { FC } from 'react';
interface Props {}



interface Props {}

const Footer: FC<Props> = (props): JSX.Element => {
    return (
      <div className="text-center">
        <p>
          &copy; 2023 
          <span className="font-sans font-bold text-highlight px-2">
            <a
              href="https://nextport-alpha.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ryan Wilson
            </a>
          </span>
           A black Dev.
        </p>
      </div>
    );
};

export default Footer;

