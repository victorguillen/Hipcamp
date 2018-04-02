import React from 'react';

import { FEATURES } from 'Hipcamp/shared/constants/features';
import FeaturesContainer from './components/features';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FeaturesContainer
          features={FEATURES}
        />
      </div>
    );
  }
}
