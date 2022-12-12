import inIcon from './in';
import github from './githubIcon';

type Icons = {
  [key: string]: JSX.Element
}

type Props = {
  name: string
}

const icons: Icons = {
  inIcon,
  github
}

export const Icon = ({ name }: Props): JSX.Element => icons[name] || null