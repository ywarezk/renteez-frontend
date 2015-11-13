/**
 * we use in tests the chai immutable to assert functions return immutable types
 *
 * Created October 23rd, 2015
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdz LTD
 */

import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import ExecutionEnvironment from 'react/lib/ExecutionEnvironment';
import jsdom from 'mocha-jsdom';

export default function jsdomReact() {
  console.log('wat');
  jsdom();
  console.log('wat2');
  ExecutionEnvironment.canUseDOM = true;
}

chai.use(chaiImmutable);