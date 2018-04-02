import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

class IconContainer extends React.Component {
  static propTypes = {
    presence: PropTypes.any,
    icon: PropTypes.string,
    subfeature: PropTypes.bool,
    title: PropTypes.string,
  }

  static defaultProps = {
    presence: true,
    icon: '',
    subfeature: false,
    title: '',
  };

  getMarkerClass() {
    const { presence, subfeature } = this.props;
    if (!subfeature) {
      if (presence) {
        return style.greenMarker;
      }
      return style.redMarker;
    }
    if (presence) {
      return style.subfeatureGreenMarker;
    }
    return style.subfeatureRedMarker;
  }

  render() {
    const { presence, title, icon, subfeature } = this.props;
    const iconClass = !subfeature ? style.feature : style.subfeature;
    const markerClass = this.getMarkerClass();
    return (
      <div className={`${iconClass} ${!presence && style.blur}`} title={title}>
        <div className={markerClass}>
          <img alt={title} src={icon} />
        </div>
        {!subfeature && <p>{title}</p>}
      </div>
    );
  }
}

export default IconContainer;
