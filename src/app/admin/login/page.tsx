'use client'
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { signIn } from "next-auth/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Input,
  Image,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function AdminLognPage() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          <div className="absolute inset-0">
            <img
              className="h-full w-full rounded-md object-cover object-top"
              src="https://images.unsplash.com/photo-1554797589-7241bb691973?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative">
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
              <h3 className="text-4xl font-bold text-white">Admin Login</h3>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <Card className="max-w-[400px] p-5">
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-3xl">Sign In</p>
                  <p className="text-small text-default-500">Encreators.</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <form action="#" method="post">
                  <div className="space-y-6 mt-5">
                    <Input size="md" type="email" label="Email" />
                  </div>
                  <div className="space-y-6 mt-5">
                    <Input size="md" type="password" label="Password" />
                  </div>
                  <div className="space-y-6 mt-8">
                    <Button color="primary" className="w-full">
                      Login
                    </Button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
