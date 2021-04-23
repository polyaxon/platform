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

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.8.4
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.V1RunReferenceCatalog;
import org.openapitools.client.model.V1SettingsCatalog;

/**
 * V1RunSettings
 */

public class V1RunSettings {
  public static final String SERIALIZED_NAME_NAMESPACE = "namespace";
  @SerializedName(SERIALIZED_NAME_NAMESPACE)
  private String namespace;

  public static final String SERIALIZED_NAME_AGENT = "agent";
  @SerializedName(SERIALIZED_NAME_AGENT)
  private V1SettingsCatalog agent;

  public static final String SERIALIZED_NAME_QUEUE = "queue";
  @SerializedName(SERIALIZED_NAME_QUEUE)
  private V1SettingsCatalog queue;

  public static final String SERIALIZED_NAME_ARTIFACTS_STORE = "artifacts_store";
  @SerializedName(SERIALIZED_NAME_ARTIFACTS_STORE)
  private V1SettingsCatalog artifactsStore;

  public static final String SERIALIZED_NAME_TENSORBOARD = "tensorboard";
  @SerializedName(SERIALIZED_NAME_TENSORBOARD)
  private Object tensorboard;

  public static final String SERIALIZED_NAME_COMPONENT_VERSION = "component_version";
  @SerializedName(SERIALIZED_NAME_COMPONENT_VERSION)
  private V1RunReferenceCatalog componentVersion;

  public static final String SERIALIZED_NAME_MODEL_VERSIONS = "model_versions";
  @SerializedName(SERIALIZED_NAME_MODEL_VERSIONS)
  private List<V1RunReferenceCatalog> modelVersions = null;


  public V1RunSettings namespace(String namespace) {
    
    this.namespace = namespace;
    return this;
  }

   /**
   * Get namespace
   * @return namespace
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getNamespace() {
    return namespace;
  }


  public void setNamespace(String namespace) {
    this.namespace = namespace;
  }


  public V1RunSettings agent(V1SettingsCatalog agent) {
    
    this.agent = agent;
    return this;
  }

   /**
   * Get agent
   * @return agent
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1SettingsCatalog getAgent() {
    return agent;
  }


  public void setAgent(V1SettingsCatalog agent) {
    this.agent = agent;
  }


  public V1RunSettings queue(V1SettingsCatalog queue) {
    
    this.queue = queue;
    return this;
  }

   /**
   * Get queue
   * @return queue
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1SettingsCatalog getQueue() {
    return queue;
  }


  public void setQueue(V1SettingsCatalog queue) {
    this.queue = queue;
  }


  public V1RunSettings artifactsStore(V1SettingsCatalog artifactsStore) {
    
    this.artifactsStore = artifactsStore;
    return this;
  }

   /**
   * Get artifactsStore
   * @return artifactsStore
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1SettingsCatalog getArtifactsStore() {
    return artifactsStore;
  }


  public void setArtifactsStore(V1SettingsCatalog artifactsStore) {
    this.artifactsStore = artifactsStore;
  }


  public V1RunSettings tensorboard(Object tensorboard) {
    
    this.tensorboard = tensorboard;
    return this;
  }

   /**
   * Get tensorboard
   * @return tensorboard
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Object getTensorboard() {
    return tensorboard;
  }


  public void setTensorboard(Object tensorboard) {
    this.tensorboard = tensorboard;
  }


  public V1RunSettings componentVersion(V1RunReferenceCatalog componentVersion) {
    
    this.componentVersion = componentVersion;
    return this;
  }

   /**
   * Get componentVersion
   * @return componentVersion
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1RunReferenceCatalog getComponentVersion() {
    return componentVersion;
  }


  public void setComponentVersion(V1RunReferenceCatalog componentVersion) {
    this.componentVersion = componentVersion;
  }


  public V1RunSettings modelVersions(List<V1RunReferenceCatalog> modelVersions) {
    
    this.modelVersions = modelVersions;
    return this;
  }

  public V1RunSettings addModelVersionsItem(V1RunReferenceCatalog modelVersionsItem) {
    if (this.modelVersions == null) {
      this.modelVersions = new ArrayList<V1RunReferenceCatalog>();
    }
    this.modelVersions.add(modelVersionsItem);
    return this;
  }

   /**
   * Get modelVersions
   * @return modelVersions
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<V1RunReferenceCatalog> getModelVersions() {
    return modelVersions;
  }


  public void setModelVersions(List<V1RunReferenceCatalog> modelVersions) {
    this.modelVersions = modelVersions;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1RunSettings v1RunSettings = (V1RunSettings) o;
    return Objects.equals(this.namespace, v1RunSettings.namespace) &&
        Objects.equals(this.agent, v1RunSettings.agent) &&
        Objects.equals(this.queue, v1RunSettings.queue) &&
        Objects.equals(this.artifactsStore, v1RunSettings.artifactsStore) &&
        Objects.equals(this.tensorboard, v1RunSettings.tensorboard) &&
        Objects.equals(this.componentVersion, v1RunSettings.componentVersion) &&
        Objects.equals(this.modelVersions, v1RunSettings.modelVersions);
  }

  @Override
  public int hashCode() {
    return Objects.hash(namespace, agent, queue, artifactsStore, tensorboard, componentVersion, modelVersions);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1RunSettings {\n");
    sb.append("    namespace: ").append(toIndentedString(namespace)).append("\n");
    sb.append("    agent: ").append(toIndentedString(agent)).append("\n");
    sb.append("    queue: ").append(toIndentedString(queue)).append("\n");
    sb.append("    artifactsStore: ").append(toIndentedString(artifactsStore)).append("\n");
    sb.append("    tensorboard: ").append(toIndentedString(tensorboard)).append("\n");
    sb.append("    componentVersion: ").append(toIndentedString(componentVersion)).append("\n");
    sb.append("    modelVersions: ").append(toIndentedString(modelVersions)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

