import { CSSPrefix } from './oil.view.config.js';
import { advancedSettingsSnippet } from './components/oil.advanced.settings.content';
import { DATA_CONTEXT_YES, DATA_CONTEXT_BACK } from './../constants.js';
import { getConfiguration } from './../config.js';
import { POIButtonSnippet } from './components/oil.poi.button';
import { OIL_CONFIG } from './../constants.js';


/**
 * OIL SOI will be only shown, when there is no POI on the advanced settings
 * Returned element is used to ignore Oil completely
 */
const SOIButtonSnippet = (poiActivated) => {
  let config = getConfiguration();
  return poiActivated !== true ? (
    ` <div class="${CSSPrefix}oil-l-item">
            <button class="${CSSPrefix}oil__btn-soi js-optin" data-context="${DATA_CONTEXT_YES}" data-qa="oil-YesButton">
                ${config.label_button_yes_soi}
            </button>
        </div>
        `
  ) : '';
};

export function oilAdvancedSettingsTemplate() {
  let config = getConfiguration();
  return `
<div class="${CSSPrefix}oil-content-overlay ${CSSPrefix}oil-has-gradient" data-qa="oil-as-overlay">
        <div class="${CSSPrefix}oil-l-wrapper-layout-max-width">
            <div class="${CSSPrefix}oil__heading">
                ${config.label_title_advanced_settings}
            </div>
                ${advancedSettingsSnippet()}
            <div class="${CSSPrefix}oil-l-row">
                ${POIButtonSnippet()}
                ${SOIButtonSnippet(config[OIL_CONFIG.ATTR_ACTIVATE_POI])}
                <div class="${CSSPrefix}oil-l-item ${CSSPrefix}oil-l-item--stretch">
                  <button class="${CSSPrefix}oil__btn-loi js-oilback" data-context="${DATA_CONTEXT_BACK}" data-qa="oil-NotNowButton">
                      ${config.label_button_back}
                  </button>
                </div>
            </div>
        </div>
    </div>
`
}