import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import {
  faDribbble,
  faFacebookSquare,
  faLinkedinIn,
  faPinterest,
  faPinterestSquare,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faBars,
  faBell,
  faCaretDown,
  faCaretLeft,
  faCaretRight,
  faCaretUp,
  faChartLine,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faEllipsisV,
  faFileDownload,
  faPen,
  faShoppingBag,
  faThLarge,
  faUserFriends,
  faSpinner,
  faCommentAlt,
  faSearch,
  faLocationArrow,
  faUser,
  faUsers,
  faCheck,
  faTimes,
  faUserPlus,
  faMapPin,
  faGavel,
  faLock,
  faHome,
  faRss,
  faExclamationCircle,
  faBriefcase,
  faCubes,
  faDrum,
  faPlusCircle,
  faMinusCircle,
  faEllipsisH,
  faClock,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';

export interface IconProps {
  className?: string;
  icon: string;
  size?: SizeProp;
  color?: string;
  onClick?: () => void;
  spin?: boolean;
}

const iconMap: any = {
  home: faHome,
  rss: faRss,
  'exclamation-circle': faExclamationCircle,
  'exclamation-triangle': faExclamationTriangle,
  briefcase: faBriefcase,
  cubes: faCubes,
  drum: faDrum,
  facebook: faFacebookSquare,
  twitter: faTwitter,
  linkEdin: faLinkedinIn,
  dribbble: faDribbble,
  pinterest: faPinterest,
  thLarge: faThLarge,
  friends: faUserFriends,
  shoppingBag: faShoppingBag,
  fileDownload: faFileDownload,
  caretDown: faCaretDown,
  caretUp: faCaretUp,
  caretLeft: faCaretLeft,
  caretRight: faCaretRight,
  arrowLeft: faArrowLeft,
  arrowRight: faArrowRight,
  arrowDown: faArrowDown,
  arrowUp: faArrowUp,
  bars: faBars,
  bell: faBell,
  ellipsisV: faEllipsisV,
  ellipsisH: faEllipsisH,
  'chevron-left': faChevronLeft,
  'chevron-right': faChevronRight,
  'chevron-up': faChevronUp,
  'chevron-down': faChevronDown,
  chartLine: faChartLine,
  pen: faPen,
  spinner: faSpinner,
  chat: faCommentAlt,
  search: faSearch,
  locationArrow: faLocationArrow,
  user: faUser,
  users: faUsers,
  check: faCheck,
  times: faTimes,
  userPlus: faUserPlus,
  mapPin: faMapPin,
  pinterestSquare: faPinterestSquare,
  gavel: faGavel,
  lock: faLock,
  'plus-circle': faPlusCircle,
  'minus-circle': faMinusCircle,
  clock: faClock,
};

const Icon: React.FC<IconProps> = ({
  icon,
  size,
  className,
  color,
  onClick,
  spin,
}: IconProps) => {
  return (
    <FontAwesomeIcon
      className={className}
      icon={iconMap[icon]}
      size={size}
      color={color}
      onClick={onClick}
      spin={spin}
    />
  );
};

export default Icon;
