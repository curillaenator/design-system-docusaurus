import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Story } from '@storybook/react';

import { Breadcrumbs as BreadcrumbsComponent } from '../Breadcrumbs';
import { BreadcrumbsProps } from '../interfaces';

export const BreadcrumbsStory: Story<BreadcrumbsProps> = (props) => (
  <MemoryRouter>
    <BreadcrumbsComponent {...props} />
  </MemoryRouter>
);
