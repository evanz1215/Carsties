"use client";

import { Dropdown, DropdownDivider, DropdownItem } from "flowbite-react";
import { User } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { AiFillCar, AiFillTrophy, AiOutlineLogout } from "react-icons/ai";
import { HiCog, HiUser } from "react-icons/hi2";

type Props = {
  user: User;
};

export default function UserActions({ user }: Props) {
  return (
    <Dropdown inline label={`Weclome ${user.name}`}>
      <DropdownItem icon={HiUser}>
        <Link href="/">Auctions won</Link>
      </DropdownItem>

      <DropdownItem icon={AiFillTrophy}>
        <Link href="/">My Auctions</Link>
      </DropdownItem>

      <DropdownItem icon={AiFillCar}>
        <Link href="/auctions/create">Sell my car</Link>
      </DropdownItem>

      <DropdownItem icon={HiCog}>
        <Link href="/session">Session (dev only)</Link>
      </DropdownItem>
      <DropdownDivider />

      <DropdownItem
        icon={AiOutlineLogout}
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Sign out
      </DropdownItem>
    </Dropdown>
  );
}
