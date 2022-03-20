import React from 'react';
import { useFonts } from '@use-expo/font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import { string, number, oneOf } from 'prop-types';
import icomoon from '../../assets/fonts/icomoon.ttf';
import selection from '../../assets/fonts/selection.json';

export const Icon = (props) => {
  const [fontLoaded] = useFonts({ icomoon });
  const { name, size, color } = props;
  const CustomIcon = createIconSetFromIcoMoon(selection);
  if (!fontLoaded) {
    return null;
  }
  return <CustomIcon name={name} size={size} color={color} />;
};

Icon.propTypes = {
  name: oneOf(['plus', 'cross', 'pen', 'checkmark']).isRequired,
  size: number,
  color: string,
};

Icon.defaultProps = {
  size: 24,
  color: 'black',
};
