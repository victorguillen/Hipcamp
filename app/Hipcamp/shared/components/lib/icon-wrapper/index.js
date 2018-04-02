import React from 'react';
import PropTypes from 'prop-types';

import { isEmpty } from 'lodash/fp';

import IconContainer from 'Hipcamp/shared/components/lib/icon-container';
import SubfeatureContainer from 'Hipcamp/shared/components/lib/subfeature-container';
import { FEATURESSVG } from 'Hipcamp/shared/constants/features';

import style from './style.scss';

class IconWrapper extends React.Component {
  static propTypes = {
    feature: PropTypes.object,
  }

  static defaultProps = {
    feature: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      showSubfeatures: false,
    };
  }

  toggleSubfeatures() {
    this.setState({ showSubfeatures: !this.state.showSubfeatures });
  }

  renderFeatureIcon() {
    const { feature } = this.props;
    return (
      <IconContainer
        presence={feature.presence}
        icon={FEATURESSVG[feature.title]}
        title={feature.title}
      />
    );
  }

  renderSubfeatures() {
    const { feature } = this.props;
    return (
      <SubfeatureContainer
        features={feature.subfeatures}
        parentPresence={feature.presence}
      />
    );
  }

  renderContent() {
    const { feature } = this.props;
    const showSubfeatures = this.state.showSubfeatures;
    if (!isEmpty(feature.subfeatures) && showSubfeatures) {
      return this.renderSubfeatures();
    }
    return this.renderFeatureIcon();
  }

  render() {
    const { feature } = this.props;
    return (
      <div
        className={`${style.wrapper} ${!isEmpty(feature.subfeatures) && style.clickSubfeature}`}
        onClick={() => this.toggleSubfeatures()}
      >
        {this.renderContent()}
      </div>
    );
  }
}

export default IconWrapper;
