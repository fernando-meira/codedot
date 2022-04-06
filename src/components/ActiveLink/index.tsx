import { useRouter } from 'next/router';
import { cloneElement } from 'react';
import Link, { LinkProps } from 'next/link';

interface ActiveLinkProps extends LinkProps {
  children: React.ReactElement;
}

export default function ActiveLink({ children, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter();

  const isActive = asPath === rest.href;

  return (
    <Link {...rest}>
      {cloneElement(children, {
        isActive,
      })}
    </Link>
  );
}
