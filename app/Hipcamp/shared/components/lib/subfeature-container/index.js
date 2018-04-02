import React from 'react';
import PropTypes from 'prop-types';

import IconContainer from 'Hipcamp/shared/components/lib/icon-container';
import { FEATURESSVG } from 'Hipcamp/shared/constants/features';

import style from './style.scss';

class SubfeatureContainer extends React.Component {
  static propTypes = {
    features: PropTypes.array,
    parentPresence: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    features: [],
  };

  renderSubfeatures() {
    const { features, parentPresence } = this.props;
    return features.map((feature, index) => (
      <li key={index}>
        <IconContainer
          presence={feature.presence && parentPresence}
          icon={FEATURESSVG[feature.title]}
          subfeature
          title={feature.title}
        />
      </li>
    ));
  }

  render() {
    return (
      <div className={style.className}>
        <ul>
          {this.renderSubfeatures()}
        </ul>
      </div>
    );
  }
}

export default SubfeatureContainer;
