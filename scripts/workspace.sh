#!/bin/sh
PATH=/usr/local/bin/:$PATH

yabai -m query --spaces | jq "{workspaces: .}";
