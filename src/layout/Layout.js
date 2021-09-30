import React from 'react';

import One from '../main/One';
import Two from '../main/Two';
import Three from '../main/Three';

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          textOne:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fringilla urna enim, pulvinar blandit tortor interdum sed. Sed urna elit, tristique at maximus sed, laoreet quis massa.',
          textTwo: 'Curabitur aliquam euismod augue vitae vulputate.',
          textThree:
            'Phasellus accumsan libero fermentum, tristique ligula nec, accumsan tellus. Vestibulum nec lorem quis urna auctor commodo nec eu sapien.',
        };
    }
    render() {
        return (
          <div className="row">
            <div class="col-12 col-lg-4">
                <One text={this.state.textOne}/>
            </div>
            <div class="col-12 col-lg-4">
                <Two text={this.state.textTwo}/>
            </div>
            <div class="col-12 col-lg-4">
                <Three text={this.state.textThree}/>
            </div>
          </div>
        );
    }
}

export default Layout;