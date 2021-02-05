#!/bin/sh
PATH=/usr/local/bin/:$PATH

(yabai -m query --windows --window mouse 2> /dev/null || echo "{}") | jq "{title: .title}"
