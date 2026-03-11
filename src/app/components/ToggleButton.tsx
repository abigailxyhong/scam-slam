import {Label, Switch} from "@heroui/react";

export function Toggle() {
  return (
    <Switch size="lg">
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Content>
        <Label className="text-sm">DIGITAL BUZZERS</Label>
      </Switch.Content>
    </Switch>
  );
}