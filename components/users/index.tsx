"use client";
import { useAppSelector } from "@/hooks/storeHooks";
import {
  selectAllUsers,
  useGetUsersQuery,
} from "@/redux/features/exampleApiSlice";
import NextTopLoader from "nextjs-toploader";
import React from "react";
import { Button } from "../ui/button";

export default function UserList() {
  const { isLoading } = useGetUsersQuery("");
  const usersList = useAppSelector(selectAllUsers);

  if (isLoading) {
    return (
      <NextTopLoader
        color="#2299DD"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      />
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-light950_dark-950 text-base font-semibold leading-6 ">
            Users
          </h1>
          <p className="text-light950_dark-950 mt-2 text-sm">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Button type="button" className="block ">
            Add user
          </Button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="text-light950_dark-950 py-3.5 pl-4 pr-3 text-left text-sm font-semibold  sm:pl-0"
                  >
                    id
                  </th>
                  <th
                    scope="col"
                    className="text-light950_dark-950 px-3 py-3.5 text-left text-sm font-semibold "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-light950_dark-950 px-3 py-3.5 text-left text-sm font-semibold "
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="text-light950_dark-950 px-3 py-3.5 text-left text-sm font-semibold "
                  >
                    phone
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {(usersList as any)?.map((person: any) => (
                  <tr key={person.id}>
                    <td className="text-light950_dark-950 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium  sm:pl-0">
                      {person.id}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.email}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.phone}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a href="#" className="">
                        Edit<span className="sr-only">, {person.username}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
