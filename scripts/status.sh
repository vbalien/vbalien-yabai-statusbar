#!/bin/sh
PATH=/usr/local/bin/:$PATH

LC_ALL=ja_JP.UTF-8

{
  # Date & Time
  date +"[\"%Y年%m月%d日\", \"%H時%M分\"]" | jq "{date: .[0], time: .[1]}";
  # Battery
  echo \[ \
      `pmset -g batt | egrep '([0-9]+\%).*' -o --colour=auto | cut -f1 -d'%'`\, \
      \"`pmset -g batt | grep "'.*'" | sed "s/'//g" | cut -c 18-19`\" \
    \] |
    jq "{battery: {percent: .[0], state: .[1]}}";
} | jq -s add
