# vbalien's yabai status bar

## Preview

![preview](./assets/preview.png)

## yabai 이벤트 등록 필수

```sh
yabai -m signal --add event=application_activated \
    action="osascript -e 'tell application \"Übersicht\" to refresh widget id \"vbalien-title-jsx\"'"

yabai -m signal --add event=window_title_changed \
    action="osascript -e 'tell application \"Übersicht\" to refresh widget id \"vbalien-title-jsx\"'"

yabai -m signal --add event=space_changed \
    action="osascript -e 'tell application \"Übersicht\" to refresh widget id \"vbalien-workspace-jsx\"'"
```
