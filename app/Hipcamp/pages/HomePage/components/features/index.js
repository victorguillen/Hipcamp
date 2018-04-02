import React from 'react';
import PropTypes from 'prop-types';

import IconWrapper from 'Hipcamp/shared/components/lib/icon-wrapper';

import style from './style.scss';


class FeaturesContainer extends React.Component {

  static propTypes = {
    features: PropTypes.array,
  };

  static defaultProps = {
    features: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      showAllFeatures: true,
    };
  }

  toggleFeatures() {
    this.setState({ showAllFeatures: !this.state.showAllFeatures });
  }

  renderFeatures() {
    const { features } = this.props;
    const showAllFeatures = this.state.showAllFeatures;
    const availableFeatures = [];
    const unavailableFeatures = [];
    features.map((feature, index) => {
      if (feature.presence) {
        availableFeatures.push(
          <li key={index}>
            <IconWrapper
              feature={feature}
            />
          </li>
        );
      } else {
        unavailableFeatures.push(
          <li key={index}>
            <IconWrapper
              feature={feature}
            />
          </li>
        );
      }
    });
    if (showAllFeatures) {
      return availableFeatures;
    }
    return availableFeatures.concat(unavailableFeatures);
  }

  render() {
    const showAllFeatures = this.state.showAllFeatures;
    const showHideTitle = showAllFeatures ? 'Show all' : 'Hide unavailable features';
    return (
      <div className={style.featuresContainer}>
        <div className={style.sectionTitle}>More features</div>
        <div className={style.iconsContainer}>
          <div className={style.listContainer}>
            <ul>{this.renderFeatures()}</ul>
          </div>
          <div className={style.showHideLabel} onClick={() => this.toggleFeatures()}>{showHideTitle}</div>
        </div>
      </div>
    );
  }
}

export default FeaturesContainer;
