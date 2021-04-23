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
    instance = new PolyaxonSdk.ModelRegistryV1Api();
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

  describe('ModelRegistryV1Api', function() {
    describe('archiveModelRegistry', function() {
      it('should call archiveModelRegistry successfully', function(done) {
        //uncomment below and update the code to test archiveModelRegistry
        //instance.archiveModelRegistry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bookmarkModelRegistry', function() {
      it('should call bookmarkModelRegistry successfully', function(done) {
        //uncomment below and update the code to test bookmarkModelRegistry
        //instance.bookmarkModelRegistry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createModelRegistry', function() {
      it('should call createModelRegistry successfully', function(done) {
        //uncomment below and update the code to test createModelRegistry
        //instance.createModelRegistry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createModelVersion', function() {
      it('should call createModelVersion successfully', function(done) {
        //uncomment below and update the code to test createModelVersion
        //instance.createModelVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createModelVersionStage', function() {
      it('should call createModelVersionStage successfully', function(done) {
        //uncomment below and update the code to test createModelVersionStage
        //instance.createModelVersionStage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteModelRegistry', function() {
      it('should call deleteModelRegistry successfully', function(done) {
        //uncomment below and update the code to test deleteModelRegistry
        //instance.deleteModelRegistry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteModelVersion', function() {
      it('should call deleteModelVersion successfully', function(done) {
        //uncomment below and update the code to test deleteModelVersion
        //instance.deleteModelVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getModelRegistry', function() {
      it('should call getModelRegistry successfully', function(done) {
        //uncomment below and update the code to test getModelRegistry
        //instance.getModelRegistry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getModelRegistryActivities', function() {
      it('should call getModelRegistryActivities successfully', function(done) {
        //uncomment below and update the code to test getModelRegistryActivities
        //instance.getModelRegistryActivities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getModelRegistrySettings', function() {
      it('should call getModelRegistrySettings successfully', function(done) {
        //uncomment below and update the code to test getModelRegistrySettings
        //instance.getModelRegistrySettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getModelVersion', function() {
      it('should call getModelVersion successfully', function(done) {
        //uncomment below and update the code to test getModelVersion
        //instance.getModelVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getModelVersionStages', function() {
      it('should call getModelVersionStages successfully', function(done) {
        //uncomment below and update the code to test getModelVersionStages
        //instance.getModelVersionStages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listModelRegistries', function() {
      it('should call listModelRegistries successfully', function(done) {
        //uncomment below and update the code to test listModelRegistries
        //instance.listModelRegistries(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listModelRegistryNames', function() {
      it('should call listModelRegistryNames successfully', function(done) {
        //uncomment below and update the code to test listModelRegistryNames
        //instance.listModelRegistryNames(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listModelVersionNames', function() {
      it('should call listModelVersionNames successfully', function(done) {
        //uncomment below and update the code to test listModelVersionNames
        //instance.listModelVersionNames(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listModelVersions', function() {
      it('should call listModelVersions successfully', function(done) {
        //uncomment below and update the code to test listModelVersions
        //instance.listModelVersions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchModelRegistry', function() {
      it('should call patchModelRegistry successfully', function(done) {
        //uncomment below and update the code to test patchModelRegistry
        //instance.patchModelRegistry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchModelRegistrySettings', function() {
      it('should call patchModelRegistrySettings successfully', function(done) {
        //uncomment below and update the code to test patchModelRegistrySettings
        //instance.patchModelRegistrySettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchModelVersion', function() {
      it('should call patchModelVersion successfully', function(done) {
        //uncomment below and update the code to test patchModelVersion
        //instance.patchModelVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('restoreModelRegistry', function() {
      it('should call restoreModelRegistry successfully', function(done) {
        //uncomment below and update the code to test restoreModelRegistry
        //instance.restoreModelRegistry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unbookmarkModelRegistry', function() {
      it('should call unbookmarkModelRegistry successfully', function(done) {
        //uncomment below and update the code to test unbookmarkModelRegistry
        //instance.unbookmarkModelRegistry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateModelRegistry', function() {
      it('should call updateModelRegistry successfully', function(done) {
        //uncomment below and update the code to test updateModelRegistry
        //instance.updateModelRegistry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateModelRegistrySettings', function() {
      it('should call updateModelRegistrySettings successfully', function(done) {
        //uncomment below and update the code to test updateModelRegistrySettings
        //instance.updateModelRegistrySettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateModelVersion', function() {
      it('should call updateModelVersion successfully', function(done) {
        //uncomment below and update the code to test updateModelVersion
        //instance.updateModelVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
