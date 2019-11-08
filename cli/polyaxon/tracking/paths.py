#!/usr/bin/python
#
# Copyright 2019 Polyaxon, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# coding: utf-8
from __future__ import absolute_import, division, print_function

import json
import os

from polyaxon import settings
from polyaxon.env_vars.keys import (
    POLYAXON_KEYS_ARTIFACTS_PATHS,
    POLYAXON_KEYS_OUTPUTS_PATH,
)
from polyaxon.tracking.is_managed import ensure_is_managed
from polyaxon.tracking.no_op import check_no_op


@check_no_op
def get_artifacts_paths():
    """
    The data/artifacts paths dictionary that you mounted for the job/experiment.
    {'data1': '/data/1/', 'data-foo': '/data/foo'}
    """
    ensure_is_managed()
    paths = os.getenv(POLYAXON_KEYS_ARTIFACTS_PATHS, None)
    try:
        return json.loads(paths) if paths else None
    except (ValueError, TypeError):
        print(
            "Could get data/artifacts paths, "
            "please make sure this is running inside a polyaxon job."
        )
        return None


@check_no_op
def get_outputs_path():
    """
    The outputs path generated by polyaxon based on the hierarchy of the experiment:
    `user/project-uid/run-uid/files`
    """
    ensure_is_managed()
    return os.getenv(POLYAXON_KEYS_OUTPUTS_PATH, None)


@check_no_op
def get_log_level():
    """If set on the polyaxonfile it will return the log level."""
    ensure_is_managed()
    return settings.CLIENT_CONFIG.log_level
