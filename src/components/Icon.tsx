import type { SVGProps } from "react";
import {
  IconCompass,
  IconCode,
  IconLayers,
  IconSpark,
  IconHandshake,
  IconShield,
  IconNetwork,
  IconRocket,
  IconCheck,
  IconArrowRight,
  IconMail,
  IconPin,
  IconClock,
  IconInstagram,
  IconLinkedin,
  IconDesk,
  IconBuilding,
  IconUsers,
  IconWifi,
  IconCoffee,
  IconCalendar,
  IconPrinter,
} from "./icons";

const map = {
  compass: IconCompass,
  code: IconCode,
  layers: IconLayers,
  spark: IconSpark,
  handshake: IconHandshake,
  shield: IconShield,
  network: IconNetwork,
  rocket: IconRocket,
  check: IconCheck,
  arrow: IconArrowRight,
  mail: IconMail,
  pin: IconPin,
  clock: IconClock,
  instagram: IconInstagram,
  linkedin: IconLinkedin,
  desk: IconDesk,
  building: IconBuilding,
  users: IconUsers,
  wifi: IconWifi,
  coffee: IconCoffee,
  calendar: IconCalendar,
  printer: IconPrinter,
} as const;

export type IconName = keyof typeof map;

export default function Icon({
  name,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  const Cmp = map[name];
  return <Cmp {...props} />;
}
