
import { assert } from 'ember-metal/utils';
import get from 'ember-metal/get';
import { isPresent } from 'ember-utils';

export function initialize(application) {
  let config = application.resolveRegistration('config:environment');
  let settings = get(config, 'ember-cli-interakt');

  if (get(settings, 'enabled') === false) {
    return;
  }

  assert(
    'You must define `ENV.interakt.appId` in your `config/environment.js` file.',
    isPresent(get(settings, 'appId'))
  );
  
}

export default {
  name: 'ember-cli-interakt',
  initialize
};
