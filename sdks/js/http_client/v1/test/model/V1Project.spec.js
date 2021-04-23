// Copyright 2018-2021 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.8.4
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PolyaxonSdk);
  }
}(this, function(expect, PolyaxonSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PolyaxonSdk.V1Project();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('V1Project', function() {
    it('should create an instance of V1Project', function() {
      // uncomment below and update the code to test V1Project
      //var instane = new PolyaxonSdk.V1Project();
      //expect(instance).to.be.a(PolyaxonSdk.V1Project);
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instane = new PolyaxonSdk.V1Project();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instane = new PolyaxonSdk.V1Project();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new PolyaxonSdk.V1Project();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new PolyaxonSdk.V1Project();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new PolyaxonSdk.V1Project();
      //expect(instance).to.be();
    });

    it('should have the property created_at (base name: "created_at")', function() {
      // uncomment below and update the code to test the property created_at
      //var instane = new PolyaxonSdk.V1Project();
      //expect(instance).to.be();
    });

    it('should have the property updated_at (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updated_at
      //var instane = new PolyaxonSdk.V1Project();
      //expect(instance).to.be();
    });

    it('should have the property is_public (base name: "is_public")', function() {
      // uncomment below and update the code to test the property is_public
      //var instane = new PolyaxonSdk.V1Project();
      //expect(instance).to.be();
    });

    it('should have the property bookmarked (base name: "bookmarked")', function() {
      // uncomment below and update the code to test the property bookmarked
      //var instane = new PolyaxonSdk.V1Project();
      //expect(instance).to.be();
    });

    it('should have the property readme (base name: "readme")', function() {
      // uncomment below and update the code to test the property readme
      //var instane = new PolyaxonSdk.V1Project();
      //expect(instance).to.be();
    });

    it('should have the property excluded_runtimes (base name: "excluded_runtimes")', function() {
      // uncomment below and update the code to test the property excluded_runtimes
      //var instane = new PolyaxonSdk.V1Project();
      //expect(instance).to.be();
    });

    it('should have the property settings (base name: "settings")', function() {
      // uncomment below and update the code to test the property settings
      //var instane = new PolyaxonSdk.V1Project();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "role")', function() {
      // uncomment below and update the code to test the property role
      //var instane = new PolyaxonSdk.V1Project();
      //expect(instance).to.be();
    });

    it('should have the property live_state (base name: "live_state")', function() {
      // uncomment below and update the code to test the property live_state
      //var instane = new PolyaxonSdk.V1Project();
      //expect(instance).to.be();
    });

  });

}));
