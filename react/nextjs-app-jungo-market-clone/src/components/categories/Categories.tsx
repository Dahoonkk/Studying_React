"use client";

import { AiFillCar } from "react-icons/ai";
import { MdSportsSoccer } from "react-icons/md";
import { GiLipstick } from "react-icons/gi";
import { FaBlackTie } from "react-icons/fa";
import { GiSkirt } from "react-icons/gi";
import { GiSofa } from "react-icons/gi";
import { CgSmartHomeCooker } from "react-icons/cg";
import { HiDesktopComputer } from "react-icons/hi";
import React from "react";
import { useSearchParams } from "next/navigation";
import CategoryBox from "./CategoryBox";

export const categories = [
  {
    label: "디지털기기",
    path: "digital",
    icon: HiDesktopComputer,
    description: "디지털기기 카테고리입니다.",
  },
  {
    label: "생활가전",
    path: "appliances",
    icon: CgSmartHomeCooker,
    description: "생활가전 카테고리입니다.",
  },
  {
    label: "가구/인테리어",
    path: "interior",
    icon: GiSofa,
    description: "가구/인테리어 카테고리입니다.",
  },
  {
    label: "여성의류",
    path: "women-clothing",
    icon: GiSkirt,
    description: "디지털기기 카테고리입니다.",
  },
  {
    label: "남성패션/잡화",
    path: "men-fashion",
    icon: FaBlackTie,
    description: "남성패션/잡화 카테고리입니다.",
  },
  {
    label: "뷰티/미용",
    path: "beauty",
    icon: GiLipstick,
    description: "뷰티/미용 카테고리입니다.",
  },
  {
    label: "스포츠/레저",
    path: "sports",
    icon: MdSportsSoccer,
    description: "스포츠/레저 카테고리입니다.",
  },
  {
    label: "중고차",
    path: "used-car",
    icon: AiFillCar,
    description: "중고차 카테고리입니다.",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  // console.log(params?.get('men-fashion'))

  return (
    <div
        className="
            flex
            flex-row
            items-center
            justify-between
            pt-4
            overflow-x-auto
        "
    >
      {categories.map((item) => (
        <CategoryBox 
            key={item.label}
            label={item.label}
            path={item.path}
            icon={item.icon}
            selected={category === item.path}
        />
      ))}
    </div>
  );
};

export default Categories;
