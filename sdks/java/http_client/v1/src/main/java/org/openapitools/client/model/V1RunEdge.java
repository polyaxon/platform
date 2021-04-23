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
import org.openapitools.client.model.V1Run;
import org.openapitools.client.model.V1RunEdgeKind;
import org.openapitools.client.model.V1Statuses;

/**
 * V1RunEdge
 */

public class V1RunEdge {
  public static final String SERIALIZED_NAME_UPSTREAM = "upstream";
  @SerializedName(SERIALIZED_NAME_UPSTREAM)
  private V1Run upstream;

  public static final String SERIALIZED_NAME_DOWNSTREAM = "downstream";
  @SerializedName(SERIALIZED_NAME_DOWNSTREAM)
  private V1Run downstream;

  public static final String SERIALIZED_NAME_KIND = "kind";
  @SerializedName(SERIALIZED_NAME_KIND)
  private V1RunEdgeKind kind = V1RunEdgeKind.ACTION;

  public static final String SERIALIZED_NAME_VALUES = "values";
  @SerializedName(SERIALIZED_NAME_VALUES)
  private Object values;

  public static final String SERIALIZED_NAME_STATUSES = "statuses";
  @SerializedName(SERIALIZED_NAME_STATUSES)
  private List<V1Statuses> statuses = null;


  public V1RunEdge upstream(V1Run upstream) {
    
    this.upstream = upstream;
    return this;
  }

   /**
   * Get upstream
   * @return upstream
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Run getUpstream() {
    return upstream;
  }


  public void setUpstream(V1Run upstream) {
    this.upstream = upstream;
  }


  public V1RunEdge downstream(V1Run downstream) {
    
    this.downstream = downstream;
    return this;
  }

   /**
   * Get downstream
   * @return downstream
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Run getDownstream() {
    return downstream;
  }


  public void setDownstream(V1Run downstream) {
    this.downstream = downstream;
  }


  public V1RunEdge kind(V1RunEdgeKind kind) {
    
    this.kind = kind;
    return this;
  }

   /**
   * Get kind
   * @return kind
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1RunEdgeKind getKind() {
    return kind;
  }


  public void setKind(V1RunEdgeKind kind) {
    this.kind = kind;
  }


  public V1RunEdge values(Object values) {
    
    this.values = values;
    return this;
  }

   /**
   * Get values
   * @return values
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Object getValues() {
    return values;
  }


  public void setValues(Object values) {
    this.values = values;
  }


  public V1RunEdge statuses(List<V1Statuses> statuses) {
    
    this.statuses = statuses;
    return this;
  }

  public V1RunEdge addStatusesItem(V1Statuses statusesItem) {
    if (this.statuses == null) {
      this.statuses = new ArrayList<V1Statuses>();
    }
    this.statuses.add(statusesItem);
    return this;
  }

   /**
   * Get statuses
   * @return statuses
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<V1Statuses> getStatuses() {
    return statuses;
  }


  public void setStatuses(List<V1Statuses> statuses) {
    this.statuses = statuses;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1RunEdge v1RunEdge = (V1RunEdge) o;
    return Objects.equals(this.upstream, v1RunEdge.upstream) &&
        Objects.equals(this.downstream, v1RunEdge.downstream) &&
        Objects.equals(this.kind, v1RunEdge.kind) &&
        Objects.equals(this.values, v1RunEdge.values) &&
        Objects.equals(this.statuses, v1RunEdge.statuses);
  }

  @Override
  public int hashCode() {
    return Objects.hash(upstream, downstream, kind, values, statuses);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1RunEdge {\n");
    sb.append("    upstream: ").append(toIndentedString(upstream)).append("\n");
    sb.append("    downstream: ").append(toIndentedString(downstream)).append("\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    values: ").append(toIndentedString(values)).append("\n");
    sb.append("    statuses: ").append(toIndentedString(statuses)).append("\n");
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

