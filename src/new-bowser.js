var Parser = require('./parser');
/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2017
 */

/*
* Ideas
* - Cacheable response
* */

/**
 * Bowser class
 */
class Bowser {
  /**
   * Creates an object that parse UA
   * @param UA
   *
   * @example
   * const bowser = new Bowser(window.navigator.userAgent);
   * bowser.getBrowser()
   */
  constructor(UA) {
    if (!UA) {
      throw new Error('UserAgent is not defined');
    }
    this._ua = UA;
    this._parser = new Parser(UA);
  }

  // static filter(UACollection, range) {}
  // static inRange(range, UACollection) {}

  /**
   * Get browser's version
   * @returns {String}
   */
  getBrowserVersion() {}

  /**
   * Get a browser's name
   * @returns {String}
   */
  getBrowserName() {}

  /**
   * Get an object with a name and version of the browser
   * @returns {Object}
   */
  getBrowser() {}

  /**
   * Get an object with a name and version of the OS if it's defined
   * @returns {Object}
   */
  getOS() {}

  /**
   * Get name of OS
   * @returns {String}
   */
  getOSName() {}

  /**
   * Get OS version
   */
  getOSVersion() {}

  /**
   * Check if the browser is in range or not
   * @param {Object} range
   * @returns {Boolean}
   */
  inRange(range) {
    if (!range) {
      throw new Error('Range can not be empty');
    }
  }

  /**
   * Check if the browser is NOT in range or not
   * @param {Object} range
   * @returns {Boolean}
   */
  notInRange(range) {}
}