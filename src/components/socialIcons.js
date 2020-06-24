import React from 'react';

import Link from '@material-ui/core/Link';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Toolbar from '@material-ui/core/Toolbar';

import PropTypes from 'prop-types';
import { socialLinks } from '../config/self';

function SocialIcons(props) {
  const { fontSize = 'default', spacing = '1em' } = props;

  return (
    <Toolbar disableGutters>
      <Link href={socialLinks.github} style={{ marginRight: spacing }}>
        <GithubIcon style={{ color: 'black' }} fontSize={fontSize} />
      </Link>
      <Link href={socialLinks.linkedIn}>
        <LinkedInIcon style={{ color: '#0072b1' }} fontSize={fontSize} />
      </Link>
    </Toolbar>
  );
}

SocialIcons.propTypes = {
  fontSize: PropTypes.string.isRequired,
  spacing: PropTypes.string.isRequired,
};

export default SocialIcons;
