import React from "react";
import FilledMeIcon from "../assets/icons/icons_filled_me.svg";
import OutlinedMeIcon from "../assets/icons/icons_outlined_me.svg";

// 定义图标映射
const iconMap = {
  "me-filled": FilledMeIcon,
  "me-outlined": OutlinedMeIcon,
  // 如果有其他图标，按此格式继续添加
};

interface IconProps {
  name: keyof typeof iconMap;
  size?: number;
  color?: string;
}

const IconComponent: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "black",
}) => {
  const Icon = iconMap[name];

  if (!Icon) {
    console.warn(`Icon "${name}" does not exist.`);
    return null;
  }

  return <Icon width={size} height={size} fill={color} />;
};

export default IconComponent;
