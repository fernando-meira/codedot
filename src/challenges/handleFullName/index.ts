interface handleFullNameProps {
  fullName: string;
  flag?: 'firstName' | 'lastName';
}

export default function handleFullName({
  fullName,
  flag,
}: handleFullNameProps) {
  if (flag === 'firstName') {
    return fullName.split(' ')[0];
  }

  if (flag === 'lastName') {
    return fullName
      .split(' ')
      .filter((_, index) => index !== 0)
      .join(' ');
  }

  return fullName;
}
