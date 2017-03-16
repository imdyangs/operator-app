/** OperatorSettingsMenu
  * Displays informaiton about the operator.
  * Might eventually hold a menu settings button?
*/

import React from 'react';
import './OperatorSettingsStyles.css';


const OperatorSettingsMenu = () => (
  <section className="SettingsMenu">
    <div className="Settings__box">
      <img className="Settings__avatar" alt="billmurray" src="http://www.fillmurray.com/50/50" />
      <span>Operator: Steve</span>
    </div>
  </section>
);


export default OperatorSettingsMenu;
