import React from 'react';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import { Button } from '@kit-xyz/button';

export const LinkToLayout = () => {
  const { colorMode } = useColorMode();

  return (
    <Link to='/tracker'>
      <Button colorMode={colorMode}>Посмотреть</Button>
    </Link>
  );
};
