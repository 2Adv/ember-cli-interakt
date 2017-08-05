import Ember from 'ember';
import Service from 'ember-service';
import computed, { reads } from 'ember-computed';
import get from 'ember-metal/get';
import getOwner from 'ember-owner/get';
import { assign } from 'ember-platform';

const { getWithDefault } = Ember;

export default Service.extend({
  
  config: computed(function() {
    return getOwner(this).resolveRegistration('config:environment');
  }),

  boot(bootConfig = {}) {
    let config = get(this, 'config');
    let interaktSettings = get(config, 'ember-cli-interakt');
    let appId = interaktSettings['appId'];
    bootConfig = assign({app_id:appId}, bootConfig);
    window.mySettings = bootConfig
  },

});
